const mongoose = require("mongoose");
const bcrypt = require('bcrypt');
const validator = require('validator');

const userSchema = new mongoose.Schema({
    username: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    name: {type: String, required: true},
    frequency: {type: String, required: true},
    goals: {type: String, required: true},
    levels: {type: String, required: true},
    favorites: {type: String, required: true}
}, 
{ timestamps: true,
})

const User = mongoose.model('User', userSchema)
module.exports = User;