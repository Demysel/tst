const Event = require('../models/Event');

exports.createEvent = async (req, res) => {
  const { title, date, type, userId } = req.body;
  const newEvent = new Event({ title, date, type, userId });
  await newEvent.save();
  res.status(201).send('Event created');
};

exports.getEvents = async (req, res) => {
  const { userId } = req.query;
  const events = await Event.find({ userId });
  res.status(200).json(events);
};

