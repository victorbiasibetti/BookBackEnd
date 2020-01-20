const mongoose = require('mongoose')

const BookSchema = new mongoose.Schema({
  title: {
    type: String
  },
  description: {
    type: String
  }
})

const Book = mongoose.model('Book', BookSchema)

module.exports = Book