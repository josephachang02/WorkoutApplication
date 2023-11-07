const mongoose = require("mongoose");
const bcrypt = require('bcrypt');
const validator = require('validator');

const userSchema = new mongoose.Schema({
    username: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    name: {type: String, required: true},
    frequency: {type: String},
    goals: {type: String},
    levels: {type: String},
    favorites: [
        {
        type: String,
        }
        ],
}, 
{ timestamps: true,
})

const User = mongoose.model('User', userSchema)
module.exports = User;