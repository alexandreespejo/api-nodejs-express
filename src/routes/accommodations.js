const express = require('express') 

const router = express.Router()
const AccommodationsController = require('../controllers/Accommodations')

router.get('/accommodations', AccommodationsController.index)

router.post('/accommodations', AccommodationsController.create)

router.put('/accommodations', AccommodationsController.update)

router.delete('/accommodations', AccommodationsController.destroy)



module.exports = router