var express = require('express');
var router = express.Router();

let map = new Map([["key1, value1"], ['key2, value2']])

router.get('/', function(req, res, next) {
    console.log('show the sign in page')

    res.render('signin', { title: 'Chat Application - Sign In'});
});

router.post('/', function(req, res) {
    console.log('trying to in')
    const username = req.body.username
    const password = req.body.password

    authenticate(username, password)
        .then((authenticationStatus) => {
            if (authenticationStatus === true) {
                console.log("authenticated")
            } else {
                console.log("authentication failed")
            }
        }).catch((error) => {
            console.log('Error: ' + error)
    })

    // check username's password with the provided. Just redirect to sign in page since we're not validating that logic
    res.redirect('/signin')
});

async function authenticate(username, password) {
    return new Promise((resolve, reject) => {
        const actual = map.get(username)
        return new Promise(actual === password)
    })
}

module.exports = router