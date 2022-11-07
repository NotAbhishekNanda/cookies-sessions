var express = require('express');
var router = express.Router();

/*
    This should show a logged in page
*/
router.get('/', function(req, res, next) {
  if(!req.session.loggedIn) {
    res.render('notLoggedIn');
  }
  console.log(`At the checkout, session Id ${req.session.id}`);
  console.log(`Total apples ${req.session.appleCount}, session Id ${req.session.id}`);
  res.render('checkout', { count: req.session.appleCount });
});

module.exports = router;
