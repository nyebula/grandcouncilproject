// This will house the schema (structure) of a login/account of the database
const mongoose = require('mongoose')

const accountschema = new mongoose.Schema({
    username: {
        type: String,
        trim: true,
        required: true
    },
    password: {
        type: String,
        trim: true,
        required: true
    }
});

const account = mongoose.model('Account', accountschema);

module.exports = {account};