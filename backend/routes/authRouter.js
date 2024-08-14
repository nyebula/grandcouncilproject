// This will intercept the login requests and process them. It should send requests to their respective controllers.
const express = require('express');
const { userVerification } = require("../utils/helpers/userAuth");
const { home } = require('../controllers/homeController');
const router = express.Router();

router.use(userVerification)
router.post('/home', home)
router.post('/logout', (req, res) => {
    try {
        res.clearCookie('token');
    }
    catch (e) {
        console.log(e);
    }
})

module.exports = router;
