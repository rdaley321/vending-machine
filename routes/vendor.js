const express = require('express')
const router = express.Router()
const Item = require('../models/Item')
const Machine = require('../models/Machine')
const Money = require('../models/Money')


router.post('/api/vendor/items', function(req,res) {
  const item = new Item()
  item.name = req.body.name
  item.price = req.body.price
  item.description = req.body.description
  item.quantity = req.body.quantity
  item.save().then(function(item) {
    res.json(item)
  }).catch(function(err) {
    res.status(418).json(err)
  })
})

router.delete('/api/vendor/:itemId',  function(req,res) {
  Item.deleteOne({_id: req.params.itemId}).then(function(item) {
    res.json(item)
  })
    .catch(function(err) {
      res.status(422).json(err)
    })
})

router.get('/api/vendor/purchases', function(req,res) {
  Machine.find()
    .then(function(m) {
      res.json(m)
    })
    .catch(function(err) {
      res.status(418).json(err)
    })
})

router.get('/api/vendor/money', function(req,res) {
  let monies = 0
  Money.find()
    .then(function(money) {
      for (var i = 0; i < money.length; i++) {
        monies += money[i].totalMoney
      }
    })
    .then(function() {
      res.json({monies})
    })
    .catch(function(err) {
      res.status(418).json(err)
    })
})

router.put('/api/vendor/items/:itemId', function(req,res) {
  Item.findOne({_id: req.params.itemId}, function(err, item) {
    item.quantity = req.body.quantity
    item.description = req.body.description
    item.price = req.body.price
    item.save()
    .then(function() {
      res.json({status: 'Update successful!!'})
    })
    .catch(function() {
      res.json(err)
    })
  })
})

module.exports = router
