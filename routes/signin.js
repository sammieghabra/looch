var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    console.log('show the sign in page')

    res.render('signin', { title: 'Chat Application - Sign In'});
});

router.post('/', function(req, res) {
    console.log('trying to in')
    const username = req.body.username
    const password = req.body.password

    // check username's password with the provided. Just redirect to sign in page since we're not validating that logic
    res.redirect('/signin')
});

module.exports = router