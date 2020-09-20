const express = require('express');
const authRouter = express.Router();
const passport = require('../services/auth/local');
const authHelpers = require('../services/auth/auth_helpers');
const usersController = require('../controllers/users_controller');


authRouter.post('/register', usersController.create);

authRouter.post('/login', passport.authenticate('local', {
    successRedirect: '/api/v1/auth/login',
    failureRedirect: '/api/v1/auth/login',
    failureFlash: true,
    })
);

authRouter.get('/login', (req, res) => {
    if(req.user) return res.status(200).json({
        message: 'User Verified',
        auth: true,
        data: {
            user: req.user
        }
    })
    else return res.status(400).json({
        message: 'Login Failed. Incorrect password or username',
        auth: false,
        data: {
            user: null
        }
    })
})

authRouter.get('/logout', (req, res) => {
    req.logout();
    res.json({
        message: 'Logged Out',
        auth: false,
        data: {
            user: null
        }
    })
})

module.exports = authRouter;