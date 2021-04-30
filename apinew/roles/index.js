const express = require('express');
const router = express.Router();

router.get('/role-data', require('./getroledata'));

module.exports = router;
