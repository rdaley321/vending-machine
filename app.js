const express = require("express")
const mustache = require("mustache-express")
const app = express()
const mongoose = require('mongoose')
const routes = require("./routes/router")
const status = require('./routes/status')

mongoose.Promise = require('bluebird')
mongoose.connect('mongodb://localhost:27017/vendingmachine')

app.use(routes)
app.use(status)

app.listen(3000, function(){
  console.log("Server is up and running!")
})
