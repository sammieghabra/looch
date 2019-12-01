let express = require('express');
let router = express.Router();

router.get('/', function(req, res, next) {

    var isAuthenticated = false

    if (req.cookies["looch-auth"]) {
        console.log('Need to validate the cookie')
        isAuthenticated = true
    } else {
        console.log('User needs to sign in')
    }

    res.render('store', { title: 'If we kissed' ,
        promotionImageSource: '/images/promotions/d4zzyqu-869b838c-0aa9-4391-8f35-f06250080909.jpg' ,
    firstImage: 'images/newItems/download.jpeg',
        secondImage: 'images/newItems/download.png',
        thirdImage: 'images/newItems/download_1.png',
        fourthImage: 'images/newItems/download_2.jpeg'});
});

module.exports = router;