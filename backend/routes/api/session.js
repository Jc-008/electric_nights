// We will add the following routes to your Express application:

// Login: POST /api/session
// Logout: DELETE /api/session
// Signup: POST /api/users
// Get session user: GET /api/session

// This file will hold the resources for the route paths beginning with /api/session

const express = require('express');
const asyncHandler = require('express-async-handler');          // will wrap asynchronous route handlers and custom middlewares.

const { setTokenCookie, restoreUser } = require('../../utils/auth');
const { User } = require('../../db/models');
const router = express.Router();
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');





// Make a middleware called validateLogin that will check these keys and validate them:-------------------------------------------------------------------------------

const validateLogin = [
  check('credential')                                             // check middleware
    .exists({ checkFalsy: true })
    .notEmpty()
    .withMessage('Please provide a valid email or username.'),
  check('password')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a password.'),
  handleValidationErrors,                                        // handleValidationErrors middleware
];




// USER Log in API ROUTE:
router.post(
  '/',
  validateLogin,                                  // Connect the POST /api/session route to the validateLogin middleware.
  asyncHandler(async (req, res, next) => {
    const { credential, password } = req.body;

    const user = await User.login({ credential, password });      // calling the login static method on the User model, if

    if (!user) {                                            // if NO user, then create a new error with the message 'xxxxx'
      const err = new Error('Login failed');
      err.status = 401;
      err.title = 'Login failed';
      err.errors = ['The provided credentials were invalid.'];
      return next(err);
    }

    await setTokenCookie(res, user);    // if there is a user from const user, then the the setTokenCookie is run

    return res.json({                   // and JSON response of the user is returned with the users info.
      user,
    });
  }),
);


// DELETE /api/session logout:
//    will remove the token cookie from the response and return a JSON success message

// Log out
router.delete(                  // no asyncHandler used because router handler is not async
  '/',
  (_req, res) => {
    res.clearCookie('token');
    return res.json({ message: 'success' });
  }
);                 // this portion and the fetch used in the browser should have removed the token from the cookie list



/* GET /api/session : Restore session user--------------------------------------------------------------------------------------------------------------------------

The get session user route will return the session user as JSON under the key of user .
  If there is not a session, it will return a JSON with an empty object.

To get the session user, connect the restoreUser middleware.

*/

router.get(
  '/',
  restoreUser,
  (req, res) => {
    const { user } = req;
    if (user) {
      return res.json({
        user: user.toSafeObject()
      });
    } else return res.json({});
  }
);



module.exports = router;
