const express = require('express');
const userShelfRouter = express.Router();
const userShelvesController = require('../controllers/user_shelves_controller');

userShelfRouter.post('/:id([0-9]+)', userShelvesController.create);
userShelfRouter.delete('/:id([0-9]+)', userShelvesController.destroy);


module.exports = userShelfRouter;