const express = require('express')
const router = express.Router()
const ProductsController = require('../controllers/Products')

router.get('/list/:id?', ProductsController.list)

router.post('/create', ProductsController.create)

router.put('/update/:id', ProductsController.update)

router.delete('/delete/:id', ProductsController.delete)



module.exports = router