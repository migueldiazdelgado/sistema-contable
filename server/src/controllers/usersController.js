const User = require('../models/usersModel');
const bcrypt = require('bcryptjs');
const router = require('express').Router();

const createUser = async (req, res) => {
     res.json({
         user: req.body.user,
         password: req.body.password
     })
}


module.exports = {
    createUser 
}
