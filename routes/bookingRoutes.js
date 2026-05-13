const express = require('express');
const router = express.Router();
const { createBooking, getUserBookings, getBookingById } = require('../controllers/bookingController');
const { protect } = require('../middleware/authMiddleware');

router.post('/', protect, createBooking);
router.get('/', protect, getUserBookings);
router.get('/:id', protect, getBookingById);

module.exports = router;