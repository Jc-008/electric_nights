// User Auth Middlewares - three functions BELOW will aid in auth

// backend/utils/auth.js
const jwt = require('jsonwebtoken');
const { jwtConfig } = require('../config');
const { User } = require('../db/models');

const { secret, expiresIn } = jwtConfig;



/*    Set up JWT cookie after a user logs in or signs up. ---------------------------------------------

It takes in the response and the session user and generates a JWT using the imported secret.
  It is set to expire in however many seconds you set on the JWT_EXPIRES_IN key in the .env file.
    The payload of the JWT will be the return of the instance method .toSafeObject that you added previously to the User model.
      After the JWT is created, it's set to an HTTP-only cookie on the response as a token cookie.
*/

// Sends a JWT Cookie
const setTokenCookie = (res, user) => {       // takes in a response and session user
  // Create the token.
  const token = jwt.sign(
    { data: user.toSafeObject() },
    secret,
    { expiresIn: parseInt(expiresIn) }, // 604,800 seconds = 1 week
  );

  const isProduction = process.env.NODE_ENV === "production";

  // Set the token cookie
  res.cookie('token', token, {
    maxAge: expiresIn * 1000, // maxAge in milliseconds
    httpOnly: true,
    secure: isProduction,
    sameSite: isProduction && "Lax",
  });

  return token;
};



/*    Added as a pre-middleware for route handlers and for the following authentication middleware------------------------------------------------------------------------------------

RESTORE the session user based on the contents of the JWT cookie.
Create a middleware function that will verify and parse the JWT's payload and search the database for a User with the id in the payload
  (this query should use the currentUser scope since the hashedPassword is not needed for this operation.

If there is a User found, then save the user to a key of user onto the request.
  If there is an error verifying the JWT or a User cannot be found with the id, then clear the token cookie from the response.
*/

const restoreUser = (req, res, next) => {
  // token parsed from cookies
  const { token } = req.cookies;

  return jwt.verify(token, secret, null, async (err, jwtPayload) => {
    if (err) {
      return next();
    }

    try {
      const { id } = jwtPayload.data;
      req.user = await User.scope('currentUser').findByPk(id);
    } catch (e) {
      res.clearCookie('token');
      return next();
    }

    if (!req.user) res.clearCookie('token');

    return next();
  });
};



/*    To add is for requiring a session user to be authenticated before accessing a route.------------------------------------------------------------------------------------

Define this middleware as an array with the restoreUser middleware function you just created as the first element in the array.
  This will ensure that if a valid JWT cookie exists, the session user will be loaded into the req.user attribute.

The second middleware will check req.user and will go to the next middleware if there is a session user present there.
  If there is no session user, then an error will be created and passed along to the error-handling middlewares.
*/

// If there is no current user, return an error
const requireAuth = [
  restoreUser,                           // FIRST ELEMENT of the ARRAY , the middleware function created on line 54.
  function (req, res, next) {                 //2nd middleware built to check if the req.user is true, if so pass that to the next middleware.
    if (req.user) return next();

    const err = new Error('Unauthorized');        // if FALSE then a new error is created with a title, errors and a status.
    err.title = 'Unauthorized';
    err.errors = ['Unauthorized'];
    err.status = 401;
    return next(err);                             // passed on to the next error handling middleware.
  },
];
// Both restoreUser and requireAuth will be APPLIED as a pre-middleware to route handlers where needed.


module.exports = { setTokenCookie, restoreUser, requireAuth };
