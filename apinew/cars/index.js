var express = require('express')
  , router = express.Router()

// Car brands page
// router.get('/brands', function(req, res) {
//   res.send('Audi, BMW, Mercedes')
// })

// Car models page
router.get('/models', require('./carmodels'))
router.get('/brands', require('./carbrands'))

module.exports = router;
