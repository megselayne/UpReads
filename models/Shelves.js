const db = require('../db/config');

class Shelves {
    constructor(shelf){
        this.id = shelf.id || null;
        this.is_public = shelf.is_public;
        this.creator_user_id = shelf.creator_user_id;
        this.shelf_name = shelf.shelf_name;
    }

    static getShelfById(id) {
        return db.oneOrNone(`SELECT * FROM shelves WHERE id = $1`, id)
        .then((shelf) => {
            if(shelf) return new this(shelf);
            else throw new Error('Shelf not found!');
        });
    }

    static getShelfByUserAndId(id, user_id){
        return db.oneOrNone(`SELECT * FROM shelves WHERE id = $1 AND creator_user_id = $2`, [id, user_id])
        .then((shelf) => {
            if(shelf) return new this(shelf);
            else throw new Error('Shelf not found!');
        });
    }
    

    static getShelvesByUserId(user_id) {
        return db.manyOrNone(`SELECT * FROM shelves WHERE creator_user_id = $1`, user_id)
        .then((shelves) => {
            return shelves.map((shelf) => {
                return new Shelves(shelf);
            })
        })
    }

    static getPublicShelfIds() {
        return db.manyOrNone(`SELECT DISTINCT id FROM shelves WHERE is_public = true`)
        .then(shelves => {
            return shelves.map(shelf => {
               return shelf.id 
            })
        })
    }

    static getPublicShelfBookIds(id) {
        return db.manyOrNone(
            `
            SELECT
                google_book_id
            FROM shelves
            LEFT JOIN
                shelf_books on shelves.id = shelf_books.shelf_id
            WHERE is_public = true
            AND shelves.id = $1
            `, id
        )
        .then(books => {
            return books.map((book) => {
                return book.google_book_id;
            })
        })
    }

    static getPublicShelfBooks() {
        return db.manyOrNone(
            `
            SELECT
                shelf_name,
                shelves.id,
                google_book_id,
                title,
                author,
                cover_img
            FROM shelves
            LEFT JOIN
                shelf_books on shelves.id = shelf_books.shelf_id
            WHERE is_public = true
            `
        )
        .then(books => {
            return books
        })
    }

    static getPublicShelfBooksById(id) {
        return db.manyOrNone(
            `
            SELECT
                shelf_name,
                shelves.id,
                creator_user_id,
                google_book_id,
                title,
                author,
                cover_img
            FROM shelves
            LEFT JOIN
                shelf_books on shelves.id = shelf_books.shelf_id
            WHERE shelves.id = $1
            `, id
        )
        .then(books => {
            return books
        })
    }
    
    save() {
        return db.one(
            `
                INSERT INTO shelves
                (is_public, creator_user_id, shelf_name)
                VALUES
                ($/is_public/, $/creator_user_id/, $/shelf_name/)
                RETURNING *
            `, this
        )
        .then(shelf => {
            return Object.assign(this, shelf);
        })
    }

    update(changes) {
        Object.assign(this, changes);
        return db.oneOrNone(
            `
                UPDATE shelves SET
                is_public = $/is_public/,
                creator_user_id = $/creator_user_id/,
                shelf_name = $/shelf_name/
                WHERE id = $/id/
                RETURNING *
            `, this
        )
        .then(shelf => {
            return Object.assign(this, shelf);
        })
    }

    delete() {
        return db.oneOrNone(`DELETE FROM shelves WHERE id = $1`, this.id);
    }
}

module.exports = Shelves;