const mongoose = require('mongoose');

const UsersSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Please enter your name"], 
        },

        username: {
            type: String,
            required: [true, "Please enter your username"],
            unique: true,
        },

        Email: {
            type: String,
            required: [true, "Please enter your email"],
            unique: true,
        },
        password: {
            type: String,
            required: [true, "Please enter your password"],
        },
        number: {
            type: String,
            required: [true, "Please enter your phone number"],
        },
    }
)

const Users = mongoose.model("Users", UsersSchema);

module.exports = Users;
