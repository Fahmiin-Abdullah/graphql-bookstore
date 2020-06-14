const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Book = new Schema({
  name: String,
  genre: String,
  authorId: String
});

module.exports = mongoose.model('book', Book);