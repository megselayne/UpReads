const express = require('express');
const shelfRouter = express.Router();
const shelvesController = require('../controllers/shelves_controller');


shelfRouter.post('/', shelvesController.create)
shelfRouter.put('/:id([0-9]+)', shelvesController.update)


module.exports = shelfRouter;