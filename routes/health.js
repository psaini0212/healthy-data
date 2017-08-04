var express = require('express');
var router = express.Router();

/* GET health data. */
router.get('/', function(req, res, next) {
  res.json({ status: 'health' });
});

module.exports = router;
