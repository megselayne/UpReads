const express = require('express');
const userBookRouter = express.Router();
const bookHelpers = require('../services/bookHelpers');
const userBooksController = require('../controllers/user_books_controller');

userBookRouter.get('/:shelf_id/:id', bookHelpers.getSingleBook, userBooksController.show);
userBookRouter.post('/:shelf_id/:id', userBooksController.create);
userBookRouter.put('/:id', userBooksController.update);
userBookRouter.delete('/:shelf_id/:id', userBooksController.destroy);

module.exports = userBookRouter;