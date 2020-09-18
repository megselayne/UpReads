const UserShelves = require('../models/User_Shelves');

const userShelvesController = {
    
    destroy(req, res, next) {
        Shelves.getShelfById(req.params.id)
        .then(shelf => {
            return shelf.delete()
        })
        .then(() => {
            res.json({
                message: 'Shelf successfully deleted.'
            })
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json({ err, message: err.message});
        })
    }

}

module.exports = userShelvesController;