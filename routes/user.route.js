const express = require("express");
const User = require("../models/user.model.js")
const router = express.Router();
const { getUser, createUser, updateUser, deleteUser, getUsers } = require("../controllers/user.controller");


router.get('/', getUsers);
router.get("/:id", getUser);
router.get("/", createUser);

//update a user
router.put("/:id", updateUser);

//delete a user
router.delete("/:id", deleteUser); 




module.exports = router;