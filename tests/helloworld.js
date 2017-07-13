const chai = require('chai')
const assert = chai.assert
const supertest = require('supertest')
const app = require('../app')

describe('/api/status', function() {
  it('The status of the server is OK' , function(done){
    supertest(app)
    .get('/api/status')
    .expect(200)
    .expect('content-type', /json/)
    .expect(function(res) {
      assert.equal(res.body.status, 'ok')
    })
    .end(done)
  })
})
