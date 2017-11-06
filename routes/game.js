var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var User = mongoose.model('User');
var Pokemon = require('../classes/Pokemon');
var PokemonList = require('../classes/PokemonList');

/* GET home page. */
router.get('/starter', function(req, res, next) {
  res.render('starter', {session: req.session});
});

router.post('/selectStarter', function(req, res, next) {
   let starters = [1, 4, 7];
   let valid = false;
   for(var x=0, n=starters.length; x<n; x++) {
       if(starters[x] == req.body.selected) {
           valid = true;
           break;
       }
   }
   if(valid) {
       let pokemon = PokemonList[req.body.selected-1];
       let starter = new Pokemon(req.body.nickname, pokemon.name, pokemon.id);
       User.findOneAndUpdate({username: req.session.user.username}, {$push: {pokemon: starter}}, function(err) {
           if(err)
              console.log(err);
       });
       res.redirect('/');
   }
   else {
       console.log('invalid');
   }
});

module.exports = router;