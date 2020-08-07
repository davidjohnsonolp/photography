var path = require('path');
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../public', 'app.html'));
});

/* GET about page. */
router.get('/about', function(req, res) {
  res.sendFile(path.join(__dirname, '../public', 'app.html'));
});

/* GET contact page. */
router.get('/contact', function(req, res) {
  res.sendFile(path.join(__dirname, '../public', 'app.html'));
});

/* GET images page. */
router.get('/images', function(req, res) {
  res.sendFile(path.join(__dirname, '../public', 'app.html'));
});

module.exports = router;
