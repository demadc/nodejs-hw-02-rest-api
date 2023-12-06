const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
        password: {
            type: String,
            required: [true, 'Set password for user'],
          },
          email: {
            type: String,
            required: [true, 'Email is required'],
            index: true,
            unique: true,
          },
          subscription: {
            type: String,
            enum: ["starter", "pro", "business"],
            default: "starter"
          },
          avatar:{
            type: String,
            default: null,
          },
          token: String,
          verifyToken: {
            type: String,
            default: null,
          },
          verificationToken: {
            type: String,
            required: true,
          },
                 
})

const User = mongoose.model('User', userSchema);

module.exports = User;