var express = require('express');
var router = express.Router();

/*
    This should show a logged in page
*/
router.get('/', function(req, res, next) {
  if(!req.session.loggedIn) {
    res.render('notLoggedIn');
  }
  console.log(`Adding apple to cart, session Id ${req.session.id}`);
  if(req.session.appleCount) {
    req.session.appleCount++
  } else {
    req.session.appleCount = 1
  }
  console.log(`Total apples ${req.session.appleCount}, session Id ${req.session.id}`);
  res.render('apple', { count: req.session.appleCount });
});

module.exports = router;
