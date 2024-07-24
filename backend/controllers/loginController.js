// Functions that are called by the request handled in the routes folder. Can use models in the models folder to interface with mongodb.
const Accounts = require('../models/account')
const mongoose = require('mongoose')
const bcrypt = require('bcrypt');

const login = async (req, res) => {
    try {
        const {username, password} = req.body
        
        // Assuming "Accounts" exists
        const account = await Accounts.finduser(username)
        
        // Check for nothing found
        if (account == null) {
            res.status(404).send('User does not exist')
            return
        }

        // Compare to user's password
        if (await bcrypt.compare(password, account.password)) {
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
        const {username, password} = req.body
        const hashedpassword = await bcrypt.hash(password, 10)
        
        // Assuming "Accounts" exists
        const return_code = await Accounts.create({username, hashedpassword})
        
        res.status(200).send('Success')
    }
    catch {
        res.status(501).send('Failed to add user')
    }
}

module.exports = {login, adduser}