const db = require('../db/config');

class UserBooks {
    constructor(userBook) {
        this.id = userBook.id || null;
        this.user_id = userBook.user_id;
        this.status = userBook.status;
        this.google_book_id = userBook.google_book_id;
        this.shelf_id = userBook.shelf_id;
        this.title = userBook.title;
        this.author = userBook.author;
        this.cover_img = userBook.cover_img || null;
    }

    static getBookById(id) {
        return db.oneOrNone(`SELECT * FROM user_books WHERE id = $1`, id)
        .then(book => {
            if(book) return new this(book);
            else throw new Error('Book not found!');
        });
    }

    static getBookByGId(id, shelf_id, user_id) {
        return db.oneOrNone(`SELECT * FROM user_books WHERE google_book_id = $1 AND shelf_id = $2 AND user_id = $3`, [id, shelf_id, user_id])
        .then(book => {
            if(book) return new this(book);
            else throw new Error('Book not found!');
        });
    }

    save() {
        return db.one(
            `
                INSERT INTO user_books
                (user_id, status, google_book_id, shelf_id, title, author, cover_img)
                VALUES
                ($/user_id/, $/status/, $/google_book_id/, $/shelf_id/, $/title/, $/author/, $/cover_img/)
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
                google_book_id = $/google_book_id/,
                shelf_id = $/shelf_id/,
                title = $/title/,
                author = $/author/,
                cover_img =  $/cover_img/
            WHERE id = $/id/
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