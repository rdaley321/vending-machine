const chai = require("chai");
const assert = chai.assert;
const supertest = require("supertest");
const app = require("../app")
const Machine = require("../models/Machine")

describe('Vendor', function() {
  let machine = false
  beforeEach(function(done) {
    const m = new Machine()
    m.item = 'Snickers'
    m.price = 1.50
    m.quantity = 10
    m.decription = 'Super delicious'
    m.itemsPurchased = ['Snickers','CocaCola']
    m.purchaseTime = new Date()
    m.save().then(function(m) {
      machine = m
      done()
    })
  })
  afterEach(function(done) {
    Machine.deleteMany()
      .then(function() {
        done()
    })
  })
  it('Able to see list of purchases', function(done) {
    supertest(app)
      .get('/api/vendor/purchases')
      .expect(200)
      .expect(function(res) {
        assert.equal(res.body.machine.itemsPurchased, ['Snickers', 'CocaCola'])
      })
      .end(done)
  })
})
