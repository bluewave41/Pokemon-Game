var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var User = mongoose.model('User');

router.get('/register', function(req, res) {
    res.render('register') ;
});
router.get('/login', function(req, res) {
    res.render('login');
});
router.get('/logout', function(req, res) {
	req.session.destroy();
	res.redirect('/');
});
router.post('/create', function(req, res) {
    let user = new User();
    user.username = req.body.username;
    user.password = req.body.password;
    user.pokemon = [];
    user.save(function(err) {
       if(err) {
           console.log(err);
       } 
       else {
           res.redirect('/');
       }
    });
});
router.post('/load', function(req, res) {
    User.findOne({username: req.body.username}, function(err, user) {
        if(!user) {
            res.render('login', {
              title: 'Login',
              errors: "Username doesn't exist"
            })
        }
        else {
            if(user.password != req.body.password) {
              res.render('login', {
                title: 'Login',
                errors: "Password is incorrect."
              })
            }
            else {
				req.session.user = user;
                res.redirect('/');
            }
        }
      });
});
router.get('/list', function(req, res) {
    User.find({}, function(err, users) {
        res.render('userList', {
          title: 'User List',
          users: users   
        });
    });
});

module.exports = router;