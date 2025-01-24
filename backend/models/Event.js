const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  title: String,
  date: Date,
  type: String,
  userId: mongoose.Schema.Types.ObjectId,
});

module.exports = mongoose.model('Event', eventSchema);
