var express = require('express')
  , router = express.Router()


router.get('/user-data', require('./getuserdata'))


module.exports = router;