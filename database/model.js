const mongoose = require('mongoose')

const todoSchema = new mongoose.Schema({
  content: String,
  done: Boolean,
  priority: Number,
  notes: String,
  date: String
})
const model = mongoose.model('todo', todoSchema)

module.exports = {
  model
}
