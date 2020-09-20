const express = require('express');
const gBookRouter = express.Router();
const bookHelpers = require('../services/bookHelpers');
const userBooksController = require('../controllers/user_books_controller');

gBookRouter.get('/:id', bookHelpers.getSingleBook, (req, res) => {
    res.json(res.locals.singleBook)
})
gBookRouter.post('/search', bookHelpers.searchBooks, (req, res) => {
    res.json(res.locals.search)
})
gBookRouter.delete('/:shelf_id/:id', userBooksController.destroy);

module.exports = gBookRouter;
