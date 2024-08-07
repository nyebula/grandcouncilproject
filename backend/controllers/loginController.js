// Functions that are called by the request handled in the routes folder. Can use models in the models folder to interface with mongodb.
const db = require("../db/db");
const {createSecretToken} = require("../utils/secretToken");
const User = require('../models/usermodel')
const mongoose = require('mongoose')
const bcrypt = require('bcryptjs');

const login = async (req, res) => {
    try {
        const {username, password} = req.body
        
        const user = await db.fetchlogin(username)
        
        if (user == null) {
            res.status(404).send('User does not exist')
            return
        }

        if (await bcrypt.compare(password, user.password)) {
            console.log('Successfully found ' + user.name)
            const token = createSecretToken(user._id);
            res.cookie("token", token, {
                withCredentials: true,
                httpOnly: true,
            });
            res.status(200).send('Success')
        }
        else {
            res.status(404).send('Password incorrect; Failed to login')
        }
    }
    catch (e) {
        console.log(e);
        res.status(501).send()
    }
}

module.exports = {login}
