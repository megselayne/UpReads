const db = require('../db/config');

class UserBooks {
    constructor({ id, user_id, status, google_book_id, shelf_id }) {
        this.id = id;
        this.user_id = user_id;
        this.status = status;
        this.google_book_id = google_book_id;
        this.shelf_id = shelf_id;
    }

    static getBookById(id) {
        return db.oneOrNone(`SELECT * FROM user_books WHERE id = $1`, id)
        .then(book => {
            if(book) return new this(book);
            else throw new Error('Book not found!');
        });
    }

    static getBookByGId(id, shelf_id) {
        return db.oneOrNone(`SELECT * FROM user_books WHERE google_book_id = $1 AND shelf_id = $2`, [id, shelf_id])
        .then(book => {
            if(book) return new this(book);
            else throw new Error('Book not found!');
        });
    }

    save() {
        return db.one(
            `
                INSERT INTO user_books
                (user_id, status, google_book_id)
                VALUES
                ($/user_id/, $/status/, $/google_book_id/)
                RETURNING *
            `, this
        )
        .then(book => {
            return Object.assign(this, book);
        })
    }

    update(changes) {
        Object.assign(this, changes);
        return db.one(
        `
            UPDATE user_books SET
            user_id = $/user_id/,
            status = $/status/,
            google_book_id = $/google_book_id/
            RETURNING *
        `, this
        )
        .then(book => {
            return Object.assign(this, book);
        })
    }

    delete() {
        return db.oneOrNone(`DELETE FROM user_books WHERE google_book_id = $1 AND shelf_id = $2`, [this.google_book_id, this.shelf_id]);
    }
}

module.exports = UserBooks;