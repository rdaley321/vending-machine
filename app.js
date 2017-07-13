const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const mongoose = require('mongoose')
const customerRoutes = require("./routes/customer")
const statusRoutes = require('./routes/status')
const vendorRoutes = require('./routes/vendor')

mongoose.Promise = require('bluebird')
mongoose.connect('mongodb://localhost:27017/vendingmachine')

app.use(bodyParser.json())
app.use(customerRoutes)
app.use(statusRoutes)
app.use(vendorRoutes)

app.listen(3000, function(){
  console.log("Server is up and running!")
})

module.exports = app;
