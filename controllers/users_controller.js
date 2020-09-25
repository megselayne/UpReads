const bcrypt = require('bcryptjs');
const User = require('../models/Users');
const Shelves = require('../models/Shelves');
const UserShelves = require('../models/User_Shelves');

const usersController = {
    create(req, res, next) {
        const salt = bcrypt.genSaltSync();
        const hash = bcrypt.hashSync(req.body.password, salt);
        new User({
            username: req.body.username,
            email: req.body.email,
            password_digest: hash,
        })
        .save()
        .then(user => {
            req.login(user, (err) => {
                if(err) return next(err);
                res.status(201).json({
                    message: 'User successfully created',
                    auth: true,
                    data: {
                        user,
                    }
                })
                new Shelves({
                    is_public: false,
                    creator_user_id: req.user.id,
                    shelf_name: 'My First Shelf'
        
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
            })
        })
        .catch(next);
    }
}

module.exports = usersController;