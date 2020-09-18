const db = require('../db/config');

class ShelfBooks {
    constructor({ shelf_id, google_book_id }) {
        this.shelf_id = shelf_id;
        this.google_book_id = google_book_id;
    }

    save() {
        return db.one(
            `
                INSERT INTO shelf_books
                (shelf_id, google_book_id)
                VALUES
                ($/shelf_id/, $/google_book_id/)
                RETURNING *
            `, this
        )
        .then(book => {
            return Object.assign(this, book)
        })
    }

    update(changes) {
        Object.assign(this, changes)
        return db.one(
            `
                UPDATE shelf_books SET
                shelf_id = $/shelf_id/,
                google_book_id = $/google_book_id/
                WHERE id = $1
            `, this
        )
        .then(book => {
            return Object.assign(this, book)
        })
    }

    delete() {
        return db.one(`DELETE FROM shelf_books WHERE id = $1`, this.id);
    }
}

module.exports = ShelfBooks;