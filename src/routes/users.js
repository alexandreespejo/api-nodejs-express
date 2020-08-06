import express from 'express'

const router = express.Router()
const UsersController = require('../controllers/Users')

router.get('/users', UsersController.list)

router.post('/users', UsersController.create)

export default router
