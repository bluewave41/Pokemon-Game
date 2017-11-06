var express = require('express');
var router = express.Router();
var fs = require('fs');

/* GET home page. */
router.get('/littleroot', function(req, res, next) {
  fs.readFile('maps/littleroot.txt', 'utf8', function(err, data) {
    if(err)
      console.log(err);
    res.render('map', {data: data.split(" "), folder: 'littleroot'});
  });
});

router.get('/route101', function(req, res, next) {
  fs.readFile('maps/route101.txt', 'utf8', function(err, data) {
    if(err)
      console.log(err);
    res.render('map', {data: data.split(" "), folder: 'route101'});
  });
});

module.exports = router;