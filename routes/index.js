var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {

  if (req.cookies["looch-auth"]) {
    console.log('Need to validate the cookie')
  } else {
    console.log('User needs to sign in')
    res.redirect('/signin')
  }

  res.render('index', { title: 'Chat Application - Socket IO' });
});

module.exports = router;
