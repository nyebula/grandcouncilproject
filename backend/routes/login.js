// This will intercept the login requests and process them. It should send requests to their respective controllers.
const express = require('express');
const router = express.Router();

const {
    login,
    adduser
} = require('../controllers/loginController');

router.post('/', login);
// router.post('/', adduser)

module.exports = router;
