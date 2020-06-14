const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Author = new Schema({
  name: String,
  age: Number,
  bookId: String
});

module.exports = mongoose.model('author', Author);
