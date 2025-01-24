const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  item: String,
  quantity: Number,
  userId: mongoose.Schema.Types.ObjectId,
});

module.exports = mongoose.model('Task', taskSchema);
 
