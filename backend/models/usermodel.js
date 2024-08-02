// This will house the schema (structure) of a login/account of the database
const mongoose = require('mongoose')

const userschema = new mongoose.Schema({
    username: {
        type: String,
        trim: true,
        required: true
    },
    password: {
        type: String,
        trim: true,
        required: true
    },
    name: {
        type: String,
        trim: true,
        required: true
    },
    admin: {
        type: Boolean,
        trim: true,
        required: true
    }
});

const user = mongoose.model('User', userschema);

module.exports = {user};