const router = require('express').Router();

const passport = require('passport');

router.get('/', function (req, res) {
  res.render('index.ejs', {
    user: req.user
  });
});

// Google OAuth login route
router.get('/auth/google', passport.authenticate(
  'google',
  { scope: ['profile', 'email'] }
));


// Google OAuth callback route
router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    successRedirect: '/recipes',
    failureRedirect: '/'
  }
));

module.exports = router;