const UserBooks = require('../models/User_Books');
const ShelfBooks = require('../models/Shelf_books');

const userBooksController = {
    create(req, res, next) {
        new UserBooks({
           user_id: req.user.id, 
           status: 'unread',
           google_book_id: req.params.id,
           shelf_id: req.params.shelf_id,
           title: req.body.title,
           author: req.body.author,
           cover_img: req.body.cover_img,
        })
        .save()
        .then(book => {
            new ShelfBooks({
                shelf_id: req.params.shelf_id,
                google_book_id: req.params.id,
                title: req.body.title,
                author: req.body.author,
                cover_img: req.body.cover_img,
            })
            .save()
            .then(() => {
                res.json({
                    message: 'Book successfully saved!'
                })
            })
            .catch(next)
        })
        .catch(next)
    },
    show(req, res, next) {
        UserBooks.getBookByGId(req.params.id, req.params.shelf_id, req.user.id)
        .then(book => {
            res.json({
                message: 'ok',
                userBook: book,
                gBook: res.locals.singleBook,
            })
        })
        .catch(next)
    },
    update(req, res, next) {
        UserBooks.getBookById(req.params.id)
        .then(book => {
            return book.update(req.body)
        })
        .then(() => {
            res.json({
                message: 'Book successfully updated!'
            })
        })
        .catch(next)
    },
    destroy(req, res, next) {
        UserBooks.getBookByGId(req.params.id, req.params.shelf_id, req.user.id)
        .then(book => {
            return book.delete()
        })
        .then(() => {
            res.json({
                message: 'Book successfully deleted.'
            })
        })
        .catch(next);
        ShelfBooks.getBookByIdAndShelfId(req.params.id, req.params.shelf_id)
            .then(book => {
                return book.delete()
            })
            .then(() => {
                res.json({
                    message: 'Book successfully deleted.'
                })
            })
            .catch(next);
    }
}

module.exports = userBooksController;