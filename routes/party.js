var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var User = mongoose.model('User');

/* GET home page. */
router.get('/', function(req, res, next) {
  User.findOne({username: req.session.user.username}, function(err, user) {
      res.render('party', {pokemon: user.pokemon});
  });
});

module.exports = router;