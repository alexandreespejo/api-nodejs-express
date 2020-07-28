const express = require('express')
const router = express.Router()
const CommentsController = require('../controllers/Comments')

router.get('/comments/:id?', CommentsController.list)

router.post('/comments', CommentsController.create)

router.put('/comments/:id', CommentsController.update)

router.delete('/comments/:id', CommentsController.delete)



module.exports = router