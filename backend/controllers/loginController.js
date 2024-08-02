// Functions that are called by the request handled in the routes folder. Can use models in the models folder to interface with mongodb.
const accounts = require('../models/usermodel')
const mongoose = require('mongoose')
const bcrypt = require('bcryptjs');

const login = async (req, res) => {
    try {
        const {username, password} = req.body
        
        // Assuming "Accounts" exists
        const user = await accounts.find({name: username})
        
        // Check for nothing found
        if (user == null) {
            res.status(404).send('User does not exist')
            return
        }

        // Compare to user's password
        if (await bcrypt.compare(password, user.password)) {
            console.log('Successfully found ' + user.name)
            res.status(200).send('Success')
        }
        else {
            res.status(404).send('Failed to login')
        }
    }
    catch {
        res.status(501).send()
    }
}

const adduser = async (req, res) => {
    try {
        const {username, password, name, admin} = req.body
        const hashedpassword = await bcrypt.hash(password, 10)
        
        // Assuming "Accounts" exists
        const return_code = await accounts.create({username, hashedpassword, name, admin})
        
        res.status(200).send('Success')
    }
    catch {
        res.status(501).send('Failed to add user')
    }
}

module.exports = {login, adduser}