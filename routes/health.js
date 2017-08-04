var express = require('express');
var router = express.Router();

var healthData = require('../data/response.json');

/* GET health data. */
router.get('/', function(req, res, next) {
  res.json(healthData);
});

module.exports = router;
