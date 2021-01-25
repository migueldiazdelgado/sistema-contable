const user = require('../controllers/usersController')
const router = require('express').Router()

router.post('/create', user.createUser);

module.exports = router

