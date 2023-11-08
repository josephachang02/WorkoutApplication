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

userSchema.statics.verifyUserCredentials = async function (username, password) {
    const user = await this.findOne({ username });
  
    if (!user) {
      // User with the provided username not found
      return null;
    }
  
    const passwordMatch = await bcrypt.compare(password, user.password);
  
    if (!passwordMatch) {
      // Password does not match
      return null;
    }
  
    // Both username and password are correct
    return user;
  };

const User = mongoose.model('User', userSchema)
module.exports = User;