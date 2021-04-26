// This file will hold the resources for the route paths beginning with /api/users

// backend/routes/api/users.js
const express = require('express')
const asyncHandler = require('express-async-handler');
const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { User } = require('../../db/models');
const { check } = require('express-validator');                               // importing the functions that were created
const { handleValidationErrors } = require('../../utils/validation');         // importing the functions that were created

const router = express.Router();


// middleware called validateSignup that will check the keys and validate the email, username, and password.

/* The validateSignup middleware is composed of the check and handleValidationErrors middleware.
  It checks to see if req.body.email exists and is an email, req.body.username is a minimum length of 4 and is not an email, and req.body.password is not empty.
    If at least one of them fails the check, then an error will be returned as the response.
*/
const validateSignup = [
  check('email')
    .exists({ checkFalsy: true })
    .isEmail()
    .withMessage('Please provide a valid email.'),
  check('username')
    .exists({ checkFalsy: true })
    .isLength({ min: 4 })
    .withMessage('Please provide a username with at least 4 characters.'),
  check('username')
    .not()
    .isEmail()
    .withMessage('Username cannot be an email.'),
  check('password')
    .exists({ checkFalsy: true })
    .isLength({ min: 6 })
    .withMessage('Password must be 6 characters or more.'),
  handleValidationErrors,
];


/*
Add the POST /api/users route to the router adding an asynchronous route handler.
In the route handler, call the signup static method on the User model.If the user is successfully created, then call setTokenCookie and return a JSON response with the user information.
If the creation of the user is unsuccessful, then a Sequelize Validation error will be passed onto the next error-handling middleware.

*/

// Sign up
router.post(
  '',
  validateSignup,
  asyncHandler(async (req, res) => {
    const { email, password, username } = req.body;
    const user = await User.signup({ email, username, password });

    await setTokenCookie(res, user);

    return res.json({
      user,
    });
  }),
);








module.exports = router;
