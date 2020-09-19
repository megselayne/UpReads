const db = require('../db/config');

class UserBooks {
    constructor({ id, user_id, status, google_book_id }) {
        this.id = id;
        this.user_id = user_id;
        this.status = status;
        this.google_book_id = google_book_id;
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
        return db.one(`DELETE FROM  user_books WHERE id = $1`, this.id);
    }
}

module.exports = UserBooks;