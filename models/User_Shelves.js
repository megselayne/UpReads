const db = require('../db/config');

class UserShelves {
    constructor({ id, user_id, shelf_id }) {
        this.id = id;
        this.user_id = user_id;
        this.shelf_id = shelf_id;
    }

    static getUserShelfById(id) {
        return db.oneOrNone(`SELECT * FROM user_shelves WHERE id = $1`, id)
        .then(shelf => {
            console.log(shelf)
            if(shelf) return new this(shelf);
            throw new Error('User shelf not found!')
        });
    }

    static getUserShelfIds(user_id) {
        return db.manyOrNone(`SELECT DISTINCT id FROM user_shelves WHERE user_id = true`, user_id)
        .then(shelves => {
            return shelves.map(shelf => {
               return shelf.id 
            })
        })
    }

    static getUserShelfBooks(user_id) {
        return db.manyOrNone(
            `
            SELECT
                shelf_name,
                user_shelves.shelf_id,
                google_book_id,
                title,
                author,
                cover_img
            FROM
                (
                    SELECT
                        shelf_name,
                        us.shelf_id
                    FROM user_shelves us
                    LEFT JOIN shelves on us.shelf_id = shelves.id
                    WHERE us.user_id = $1
                ) user_shelves
            LEFT JOIN shelf_books on user_shelves.shelf_id = shelf_books.shelf_id
            `, user_id
        )
        .then(books => {
            return books
        })
    }

    save() {
        return db.one(
            `   
                INSERT INTO user_shelves
                (user_id, shelf_id)
                VALUES
                ($/user_id/, $/shelf_id/)
                RETURNING *
            `, this
        )
        .then(shelf => {
           return Object.assign(this, shelf);
        })
    }

    update(changes) {
        Object.assign(this, changes)
        return db.one(
            `
                UPDATE user_shelves SET
                    user_id = $/user_id,
                    shelf_id = $/shelf_id/
                WHERE id = $/id/
                RETURNING *
            `, this
        )
        .then(shelf => {
            return Object.assign(this, shelf);
        })
    }

    delete() {
        return db.oneOrNone(`DELETE FROM user_shelves WHERE id = $1`, this.id);
    }
}


module.exports = UserShelves;