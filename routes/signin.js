var express = require('express');
var router = express.Router();

let map = new Map()
map.set('username', 'password')

router.get('/', function(req, res, next) {
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
                res.cookie('looch-auth', username)
                res.redirect('/')
            } else {
                console.log("authentication failed")
                // check username's password with the provided. Just redirect to sign in page since we're not validating that logic
                res.redirect('/signin')
            }
        }).catch((error) => {
            console.log('Error: ' + error)
            // check username's password with the provided. Just redirect to sign in page since we're not validating that logic
            res.redirect('/signin')
        })
});

async function authenticate(username, password) {
    console.log(`Attempting to authenticate with username ${username} and password ${password}`)

    return new Promise((resolve, reject) => {
        const actual = map.get(username)
        resolve(actual === password)
    })
}

module.exports = router