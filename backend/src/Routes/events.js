const express = require('express')

const {createEvent, listEvents, getEventById, updateEvent, deleteEvent} = require('../Controllers/events')

const router = express.Router()
router.post('/', createEvent);
router.get('/', listEvents);
router.get('/:eventId', getEventById);
router.put('/:eventId', updateEvent);
router.delete('/:eventId', deleteEvent);

module.exports = {router}