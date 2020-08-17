const express =  require ('express')

const router = express.Router()
const UsersController = require('../controllers/Users')

router.get('/users', UsersController.index)

router.post('/users', UsersController.create)

module.exports = router
