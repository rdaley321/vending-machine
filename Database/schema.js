const mongoose = require('mongoose')

const itemSchema = new mongoose.Schema({
  description: {
    type: String,
    required: true
  },
  cost: {
    type: Number,
    required: true
  },
  quantity: {
    type: Number,
    required: true
  },
  updatedAt: {
    type: Date,
    required: true,
    default: Date.now
  }
})

const Item = mongoose.model('Item', itemSchema)

module.exports = Item
