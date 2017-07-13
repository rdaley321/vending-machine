const express = require('express')
const router = express.Router()

router.get('/api/status', function(req,res) {
  res.status(200).json({status: 'ok'})
})

module.exports = router
