const express = require('express');
const shelfRouter = express.Router();
const shelvesController = require('../controllers/shelves_controller');
const bookHelpers = require('../services/bookHelpers');

shelfRouter.get('/:id([0-9]+)', bookHelpers.getPublicShelf, (req, res) =>{
    res.json(res.locals.publicShelf)
})
shelfRouter.post('/', shelvesController.create);
shelfRouter.put('/:id([0-9]+)', shelvesController.update);
shelfRouter.delete('/:id([0-9]+)', shelvesController.destroy);

module.exports = shelfRouter;