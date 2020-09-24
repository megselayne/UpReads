const db = require('../db/config');

class ShelfBooks {
    constructor(shelfBook) {
        this.id = shelfBook.id || null;
        this.shelf_id = shelfBook.shelf_id;
        this.google_book_id = shelfBook.google_book_id;
        this.title = shelfBook.title;
        this.author = shelfBook.author;
        this.cover_img = shelfBook.cover_img || null;
    }
    static getBookByIdAndShelfId(id, shelf_id) {
        return db.oneOrNone(`SELECT * FROM shelf_books WHERE google_book_id = $1 AND shelf_id = $2`, [id, shelf_id])
        .then(book => {
            if(book) return new this(book);
            throw new Error('Shelf book not found!')
        });
    }

    save() {
        return db.one(
            `
                INSERT INTO shelf_books
                (shelf_id, google_book_id, title, author, cover_img)
                VALUES
                ($/shelf_id/, $/google_book_id/, $/title/, $/author/, $/cover_img/)
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
                google_book_id = $/google_book_id/,
                title = $/title/,
                author = $/author/,
                cover_img =  $/cover_img/
                WHERE id = $1
            `, this
        )
        .then(book => {
            return Object.assign(this, book)
        })
    }

    delete() {
        return db.oneOrNone(`DELETE FROM shelf_books WHERE google_book_id = $1 AND shelf_id = $2`, [this.google_book_id, this.shelf_id]);
    }
}

module.exports = ShelfBooks;