var express = require('express');
var router = express.Router();


const passport = require('../lib/auth').passport;

let User = require('../models/user');

// logout
router.get('/logout', (req, res, next) => {
    req.logout();
    req.flash('success_msg', "You are logged out");
    res.redirect('/users/login');
});

// Login Form
router.get('/login', (req, res, next) => {
    res.render('login');
});

router.post('/login', (req, res, next) => {

  passport.authenticate('local', {
    successRedirect: '/chatroom', // Remember to change redirect.
    failureRedirect: '/users/login',
    failureFlash: true
  })(req, res, next);

});

// Register Form
router.get('/register', (req, res, next) => {
    res.render('register');
});

// Process Register
router.post('/register', (req, res, next) => {
    const name = req.body.name;
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;
    const password2 = req.body.password2;

    req.checkBody('name', 'Name field is required').notEmpty();
    req.checkBody('email', 'Email field is required').notEmpty();
    req.checkBody('email', 'Email must be a valid email addressd').isEmail();
    req.checkBody('username', 'Username field is required').notEmpty();
    req.checkBody('password', 'Password field is required').notEmpty();
    req.checkBody('password2', 'Passwords do not match').equals(req.body.password);

    let errors = req.validationErrors();

    if (errors) {
        res.render('register', {
            errors: errors
        });
    } else {
        const newUser = new User({
            name: name,
            username: username,
            email: email,
            password: password
        });

        User.registerUser(newUser, (err, user) => {
            if (err) throw err;
            req.flash('success_msg','You are registered and can log in');
            res.redirect('/users/login');
        });

    }
});

module.exports = router;
