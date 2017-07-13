const mongoose = require('mongoose')
const moneySchema = new mongoose.Schema({
  totalMoney: {type: Number, default:0, upsert:true, required: true}
})

const Money = mongoose.model('Money', moneySchema)

module.exports = Money
