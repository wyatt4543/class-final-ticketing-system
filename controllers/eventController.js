const Event = require('../models/Event');

exports.getEvents = async (req, res) => {
    const { category, date } = req.query;
    let query = {};
    if (category) query.category = category;
    if (date) query.date = { $gte: new Date(date) };

    const events = await Event.find(query);
    res.json(events);
};

exports.createEvent = async (req, res) => {
    const event = await Event.create(req.body);
    res.status(201).json(event);
};

exports.updateEvent = async (req, res) => {
    const event = await Event.findById(req.params.id);
    if (!event) return res.status(404).json({ error: 'Not found' });

    // Requirement: Capacity cannot be less than booked seats
    if (req.body.seatCapacity < event.bookedSeats) {
        return res.status(400).json({ error: 'Capacity below booked seats' });
    }

    const updatedEvent = await Event.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedEvent);
};

exports.getEventById = async (req, res) => {
    const event = await Event.findById(req.params.id);
    if (!event) return res.status(404).json({ error: 'Event not found' });
    res.json(event);
};

exports.deleteEvent = async (req, res) => {
    const event = await Event.findById(req.params.id);
    if (!event) return res.status(404).json({ error: 'Event not found' });

    // Prevent deletion if bookings exist
    const Booking = require('../models/Booking');
    const existingBookings = await Booking.find({ event: req.params.id });

    if (existingBookings.length > 0) {
        return res.status(400).json({ error: 'Cannot delete event with active bookings' });
    }

    await event.deleteOne();
    res.json({ message: 'Event removed' });
};