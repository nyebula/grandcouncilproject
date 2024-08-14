// This will intercept the login requests and process them. It should send requests to their respective controllers.
const express = require('express');
const { userAuth } = require("../utils/helpers/userAuth");
const { home } = require('../controllers/homeController');
const router = express.Router();

router.use(userAuth)
router.post('/home', home)

module.exports = router;
