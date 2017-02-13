var mongoose = require('mongoose');

var TodoSchema = new mongoose.Schema({
  name: String,
  completed: Boolean,
  note: String,
  _id:  Number
});

module.exports = mongoose.model('Todo', TodoSchema);
