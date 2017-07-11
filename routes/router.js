const express = require('express')
const router = express.Router()
const Item = require('../Database/schema')

router.post('/api/vendor/items', function(req,res) {
  const item = new Item()
  item.cost = .35
  item.save().then(function(item) {
    res.json(item)
  }).catch(function(err) {
    res.status(418).json(err)
  })
})

module.exports = router

// router.get('/api/customers/items', function(req,res) {
//   Item
//   res.json()
// })
