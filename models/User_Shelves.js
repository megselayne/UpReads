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
        return db.manyOrNone(`SELECT DISTINCT id FROM user_shelves WHERE user_id = $1`, user_id)
        .then(shelves => {
            return shelves.map(shelf => {
               return shelf.id 
            })
        })
    }

    static getUserShelfNameIds(user_id) {
        return db.manyOrNone(
            `
            SELECT
                shelf_name,
                us.shelf_id
            FROM user_shelves us
            LEFT JOIN shelves on us.shelf_id = shelves.id
            WHERE us.user_id = $1
            `, user_id
        )
        .then(shelves => {
            return shelves
        })
    }

    static getUserShelfBooks(user_id) {
        return db.manyOrNone(
            `
            SELECT
                u_books.shelf_name,
                u_books.shelf_id,
                u_books.google_book_id,
                u_books.title,
                u_books.author,
                u_books.cover_img,
                status
            FROM(
                SELECT
                    shelf_name,
                    user_shelves.shelf_id as shelf_id,
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
                ) u_books
            LEFT JOIN user_books on u_books.shelf_id = user_books.shelf_id
                AND u_books.google_book_id = user_books.google_book_id

            `, user_id
        )
        .then(books => {
            return books
        })
    }

    static getShelfByUserShelfIds(user_id, shelf_id){
        return db.oneOrNone(`SELECT * FROM user_shelves WHERE user_id = $1 AND shelf_id = $2`, [user_id, shelf_id])
        .then(shelf => {
            console.log(shelf)
            if(shelf) return new this(shelf);
            throw new Error('User shelf not found!')
        });
    }

    static getUserShelfBooksById(user_id, id) {
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
                    AND us.shelf_id = $2
                ) user_shelves
            LEFT JOIN shelf_books on user_shelves.shelf_id = shelf_books.shelf_id
            `, [user_id, id]
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
        return db.oneOrNone(`DELETE FROM user_shelves WHERE shelf_id = $1 AND user_id =$2`, [this.shelf_id, this.user_id]);
    }
}

module.exports = UserShelves;