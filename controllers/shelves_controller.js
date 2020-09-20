const Shelves = require('../models/Shelves');
const UserShelves = require('../models/User_Shelves');

const shelvesController = {
    create(req, res, next) {
        new Shelves({
            is_public: req.body.is_public,
            creator_user_id: req.user.id,
            shelf_name: req.body.shelf_name

        })
        .save()
        .then((shelf) => {
            new UserShelves({
                user_id: shelf.creator_user_id,
                shelf_id: shelf.id
            })
            .save()
            .then(() => {
                res.json({
                    message: 'Shelf successfully saved!'
                })
            })
            .catch(next)
        })
        .catch(next)
    },
    update(req, res, next) {
        Shelves.getShelfById(req.params.id)
        .then(shelf => {
            return shelf.update(req.body)
        })
        .then(() => {
            res.json({
                message: 'Shelf successfully updated.'
            })
        })
        .catch(next)
    },
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
        .catch(next)
    }

}

module.exports = shelvesController;