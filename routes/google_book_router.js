const express = require('express');
const gBookRouter = express.Router();
const bookHelpers = require('../services/bookHelpers');

gBookRouter.get('/:id', bookHelpers.getSingleBook, (req, res) => {
    res.json(res.locals.singleBook)
})
gBookRouter.post('/search', bookHelpers.searchBooks, (req, res) => {
    res.json(res.locals.search)
})

module.exports = gBookRouter;
