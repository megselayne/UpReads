const express = require('express');
const shelfRouter = express.Router();
const shelvesController = require('../controllers/shelves_controller');


shelfRouter.post('/', shelvesController.create)



module.exports = shelfRouter;