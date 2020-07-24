const express = require('express')
const router = express.Router()
const CommentsController = require('../controllers/Comments')

router.get('/list/:id?', CommentsController.list)

router.post('/create', CommentsController.create)

router.put('/update/:id', CommentsController.update)

router.delete('/delete/:id', CommentsController.delete)



module.exports = router