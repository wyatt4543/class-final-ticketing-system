const Booking = require('../models/Booking');
const Event = require('../models/Event');

exports.createBooking = async (req, res) => {
    const { eventId, quantity } = req.body;
    const event = await Event.findById(eventId);

    if (!event) return res.status(404).json({ error: 'Event not found' });

    // Logic: check availability
    const available = event.seatCapacity - event.bookedSeats;
    if (quantity > available) {
        return res.status(400).json({ error: `Only ${available} seats left` });
    }

    const booking = await Booking.create({
        user: req.user.id,
        event: eventId,
        quantity
    });

    // Update event seats
    event.bookedSeats += quantity;
    await event.save();

    res.status(201).json(booking);
};

exports.getUserBookings = async (req, res) => {
    const bookings = await Booking.find({ user: req.user.id }).populate('event');
    res.json(bookings);
};