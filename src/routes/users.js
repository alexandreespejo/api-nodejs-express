const express = require('express')
const router = express.Router()
const UsersController = require('../controllers/Users')

router.get('/users', UsersController.list)

router.post('/users', UsersController.create)

module.exports = router
