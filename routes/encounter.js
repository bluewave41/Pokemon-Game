var express = require('express');
var router = express.Router();
var PokemonList = require('../classes/PokemonList');

/* GET home page. */
router.post('/littleroot', function(req, res, next) {
  var ids = [2, 5, 8];
  var random = Math.random() * (5-1) + 1;
  if(random >= 3) {
      var rand = ids[Math.floor(Math.random() * ids.length)];
      res.send(PokemonList[rand-1]);
      res.end();
  }
});

module.exports = router;