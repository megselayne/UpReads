const express = require('express');
const shelfRouter = express.Router();
const shelvesController = require('../controllers/shelves_controller');


shelfRouter.post('/', shelvesController.create);
shelfRouter.put('/:id([0-9]+)', shelvesController.update);
shelfRouter.delete('/:id([0-9]+)', shelvesController.destroy);

module.exports = shelfRouter;