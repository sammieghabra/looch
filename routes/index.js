var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {

  var isAuthenticated = false

  if (req.cookies["looch-auth"]) {
    console.log('Need to validate the cookie')
    isAuthenticated = true
  } else {
    console.log('User needs to sign in')
    res.redirect('/signin')
  }

  if (isAuthenticated) {
    res.render('index', { title: 'Chat Application - Socket IO' });
  }
});

module.exports = router;
