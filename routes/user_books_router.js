const express = require('express');
const userBookRouter = express.Router();
const bookHelpers = require('../services/bookHelpers');
const userBooksController = require('../controllers/user_books_controller');

userBookRouter.get('/:shelf_id/:id', bookHelpers.getSingleBook, userBooksController.show);


module.exports = userBookRouter;