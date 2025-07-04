const mongoose = require('mongoose');

const UsersSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Please enter your name"], 
        },

        username: {
            type: String,
            required: true, 
            unique: true,
        },

        Email: {
            type: String,
            required: true, 
            unique: true,
        },
        password: {
            type: String,
            required: true,
        },
        number: {
            type: String,
            required: true,
        },
    }
)

const Users = mongoose.model("Users", UsersSchema);

module.exports = Users;
