const express = require('express')
const router = express.Router()
const Item = require('../models/Item')
const Machine = require('../models/Machine')
const Money = require('../models/Money')

router.get('/api/customer/items', function(req,res) {
  Item.find()
    .then(function(item){
      res.json(item)
    })
    .catch(function(err) {
      res.status(418).json(err)
    })
})

router.post('/api/customer/items/:itemId/purchases', function(req,res) {
  let change = req.body.inserted
  Item.findOne({_id: req.params.itemId})
    .then(function(item) {
      change -= item.price
      item.quantity -= 1
      item.save()
      .then(function() {
        const purchase = new Machine()
        purchase.itemPurchased = item.name
        purchase.timePurchased = Date.now()
        purchase.save()
        .then(function() {
          const money = new Money()
          money.totalMoney = item.price
          money.save()
          .then(function() {
            res.json({
              status: 'Purchase successful!',
              change: change
            })
          })
          .catch(function(err) {
            res.status(418).json(err)
          })
        })
      })
    })
})

module.exports = router
