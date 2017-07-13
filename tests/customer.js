const chai = require("chai");
const assert = chai.assert;
const supertest = require("supertest");
const app = require("../app")
const Item = require("../models/Item")

describe('Customer', function() {
  let item1 = false
  let item2 = false
  beforeEach(function(done) {
    const a = new Item()
    a.name = 'Snickers'
    a.price = 1.50
    a.description = 'Chocolate and Peanut Butter Candy Bar'
    a.quantity = 10
    a.save()
      .then(function(a) {
        item1 = a
        console.log(item1)
        done()
      })
      // .then(function(a))
    // const b = new Item()
    // b.name = 'CocaCola'
    // b.price = 2.25
    // b.description = 'Sugary Soda Pop'
    // b.quantity = 10
    // b.save()
    //   .then(function(b) {
    //     item2 = b
    //     console.log(item2)
    //     done()
    //   })
  })
  afterEach(function(done) {
    Item.deleteMany()
      .then(function(){
        done()
      })
  })
  it('customer retrieves items', function(done) {
    supertest(app)
    .get('/api/customer/items')
    .expect(200)
    // .expect(function (res) {
    //   assert.equal(res.body.item1.name, 'Snickers')
      // assert.equal(res.body.item2.name, 'CocaCola')
    // })
    .end(done)
  })
})
