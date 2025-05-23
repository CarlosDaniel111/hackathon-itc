const express = require('express')

const { listSalons, getSalonById, getAvailability, getAllSalons } = require('../Controllers/salons')

const router = express.Router()
router.get('/', getAllSalons);
router.get('/:salonId', getSalonById)
router.get('/:salonId/availability', getAvailability)

module.exports = { router }