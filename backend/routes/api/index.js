// backend/routes/api/index.js
const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');

router.use('/session', sessionRouter);            // connects the session page to here
router.use('/users', usersRouter);                // connects the users page to here




// // POST /api/test
// router.post('/test', function(req, res) {         // created a test route and api test route added to the router
//   res.json({ requestBody: req.body });     // sends JSON response of whatever is in the body of the req
// });




// // Test the setTokenCookie function by getting the demo user and calling setTokenCookie.--------------------------------------------------------------------------------

// // GET /api/set-token-cookie
// const asyncHandler = require('express-async-handler');
// const { setTokenCookie } = require('../../utils/auth.js');
// const { User } = require('../../db/models');
// router.get('/set-token-cookie', asyncHandler(async (req, res) => {
//   const user = await User.findOne({
//       where: {
//         username: 'Demo-lition'
//       },
//     })
//   setTokenCookie(res, user);
//   return res.json({ user });
// }));




// // Test the restoreUser middleware by connecting the middleware and checking whether or not the req.user key has been populated by the middleware properly.--------------

// // GET /api/restore-user
// const { restoreUser } = require('../../utils/auth.js');
// router.get(
//   '/restore-user',
//   restoreUser,
//   (req, res) => {
//     return res.json(req.user);
//   }
// );



// // Test your requireAuth middleware by adding a test route in your backend/routes/api/index.js file ------------------------------------------------------------------------
// //   That file will return an error if there is no session user, otherwise return the session user's information.


// // GET /api/require-auth
// const { requireAuth } = require('../../utils/auth.js');
// router.get(
//   '/require-auth',
//   requireAuth,
//   (req, res) => {
//     return res.json(req.user);
//   }
// );



module.exports = router;
