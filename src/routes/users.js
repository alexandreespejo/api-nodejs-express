const express = require('express')
const router = express.Router()
const UsersController = require('../controllers/Users')

router.get('/list', UsersController.list)

router.post('/create', UsersController.create)

module.exports = router
