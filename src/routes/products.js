const express = require('express')
const router = express.Router()
const ProductsController = require('../controllers/Products')

router.get('/list', ProductsController.list)

router.post('/create', ProductsController.create)

router.put('/update/:id', ProductsController.update)


module.exports = router