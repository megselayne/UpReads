const UserShelves = require('../models/User_Shelves');
const Shelves = require('../models/Shelves');
const UserBooks = require('../models/User_Books');

const userShelvesController = {
    create(req, res, next) {
        Shelves.getShelfById(req.params.id)
        .then(shelf => {
            new UserShelves({
                user_id: 1,
                shelf_id: shelf.id
            })
            .save()
            .then(() => {
                Shelves.getPublicShelfBookIds(req.params.id)
                .then(books => {
                    console.log(books)
                    books.map(book => {
                        new UserBooks({
                            user_id: 1,
                            status: 'unread',
                            google_book_id: book,
                        })
                        .save()
                        .then(() => {
                            res.json({
                                message: 'Shelf successfully saved!'
                            })
                        })
                    })
                })
            })
        })
    },
    update(req, res, next) {
        UserShelves.getUserShelfById(req.params.id)
        .then(shelf => {
            return shelf.update(req.body)
        })
        .then(() => {
            res.json({
                message: 'Shelf successfully updated.'
            })
        })
    },
    destroy(req, res, next) {
        UserShelves.getUserShelfById(req.params.id)
        .then(shelf => {
            console.log(`controller shelf`, shelf)
            return shelf.delete()
        })
        .then(() => {
            res.json({
                message: 'Shelf successfully deleted.'
            })
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json({ err, message: err.message});
        })
    }

}

module.exports = userShelvesController;