var express = require('express');
var router = express.Router();

var X=0;
var Y=0;

/* GET users listing. */
router.get('/', function(req, res, next) {
  X=Math.random;
  Y=Math.ceil(X);
  res.send('Math.ceil() is applied to '+X+' result is '+Y);
});

module.exports = router;
