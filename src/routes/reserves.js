const express = require('express')
const router = express.Router()
const ReservesController = require('../controllers/Reserves')

router.get('/reserves', ReservesController.index)

router.post('/reserves', ReservesController.create)

router.put('/reserves', ReservesController.update)

router.delete('/reserves', ReservesController.destroy)



module.exports = router