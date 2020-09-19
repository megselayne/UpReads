const UserShelves = require('../models/User_Shelves');

const userShelvesController = {
    //user shelves are created through the shelves_controller
    update(req, res, next) {
        UserShelves.getUserShelfById(req.params.id)
        .then(shelf => {
            return shelf.update(req.body)
        })
        .then(() => {
            res.json({
                message: 'Shelf successfully updated.'
            })
        })
    },
    destroy(req, res, next) {
        UserShelves.getUserShelfById(req.params.id)
        .then(shelf => {
            console.log(`controller shelf`, shelf)
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