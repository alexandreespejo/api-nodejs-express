const express = require('express')
const router = express.Router()
const ProductsController = require('../controllers/Products')

router.get('/list', ProductsController.list)
router.post('/create', ProductsController.create)

module.exports = router