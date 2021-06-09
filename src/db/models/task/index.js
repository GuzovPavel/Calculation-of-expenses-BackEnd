const mongoose = require('mongoose');

const {
  Schema
} = mongoose;

const taskScheme = new Schema({
  text: String,
  date: String,
  sum: Number,
  isEditingText: Boolean,
  isEditingDate: Boolean,
  isEditingSum: Boolean
})

module.exports = Task = mongoose.model('tasks', taskScheme);