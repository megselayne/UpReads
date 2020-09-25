const express = require('express');
const userShelfRouter = express.Router();
const userShelvesController = require('../controllers/user_shelves_controller');
const bookHelpers = require('../services/bookHelpers');

userShelfRouter.get('/index', userShelvesController.index);
userShelfRouter.get('/:id([0-9]+)', bookHelpers.getUserShelf, (req, res) =>{
    res.json(res.locals.userShelf)
})
userShelfRouter.get('/all', bookHelpers.getUserBooks, (req, res) => {
    res.json(res.locals.userBooks)
})
userShelfRouter.post('/:id([0-9]+)', userShelvesController.create);
userShelfRouter.delete('/:id([0-9]+)', userShelvesController.destroy);


module.exports = userShelfRouter;