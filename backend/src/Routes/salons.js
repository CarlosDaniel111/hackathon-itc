const express = require('express')

const {listSalons, getSalonById, getAvailability} = require('../Controllers/salons')

const router = express.Router()
router.get('', listSalons);
router.get('/:salonId', getSalonById)
router.get('/:salonId/availability', getAvailability)

module.exports = {router}