const mongoose = require('mongoose')
const machineSchema = new mongoose.Schema({
  itemPurchased: {type: String, required: true},
  timePurchased: {type: Date, required: true}
})

const Machine = mongoose.model('Machine', machineSchema)

module.exports = Machine
