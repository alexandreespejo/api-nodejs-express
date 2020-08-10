const express = require('express') 

const router = express.Router()
const AccommodationsController = require('../controllers/Accommodations')

router.get('/Accommodations/:id?', AccommodationsController.list)

router.post('/Accommodations', AccommodationsController.create)

router.put('/Accommodations/:id', AccommodationsController.update)

router.delete('/Accommodations/:id', AccommodationsController.delete)



module.exports = router