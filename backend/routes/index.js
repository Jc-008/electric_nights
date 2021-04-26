// backend/routes/index.js


// In this file we are creating an express ROUTER, a test Route and export the router at the bottom


const express = require('express');
const router = express.Router();
const apiRouter = require('./api');                 // import and connecting router

router.use('/api', apiRouter);    // using the api router and routes will start with /api/ from here


/* ADDED  IN WHEN WORKING ON FRONT END:---------------------------------------------------------------------------------------------

*/

// Static routes
// Serve React build files in production
if (process.env.NODE_ENV === 'production') {
  const path = require('path');
  // Serve the frontend's index.html file at the root route
  router.get('/', (req, res) => {
    res.cookie('XSRF-TOKEN', req.csrfToken());
    return res.sendFile(
      path.resolve(__dirname, '../../frontend', 'build', 'index.html')
    );
  });

  // Serve the static assets in the frontend's build folder
  router.use(express.static(path.resolve("../frontend/build")));

  // Serve the frontend's index.html file at all other routes NOT starting with /api
  router.get(/^(?!\/?api).*/, (req, res) => {
    res.cookie('XSRF-TOKEN', req.csrfToken());
    return res.sendFile(
      path.resolve(__dirname, '../../frontend', 'build', 'index.html')
    );
  });
}


/*
  In development, you need another way to get the XSRF-TOKEN cookie on your frontend application because the React frontend is on a different server than the Express backend.
    To solve this, add a backend route, GET /api/csrf/restore in the same file that can be accessed only in development and will restore the XSRF-TOKEN cookie.
*/

// Add a XSRF-TOKEN cookie in development
if (process.env.NODE_ENV !== 'production') {
  router.get('/api/csrf/restore', (req, res) => {
    res.cookie('XSRF-TOKEN', req.csrfToken());
    return res.json({});
  });
}




// TEST ROUTE: --------------------------------------------------------------------------------------------------------------------------------------
router.get('/hello/world', function(req, res){
  res.cookie('XSRF-TOKEN', req.csrfToken());          // setting a cookie on the response with the name of XSRF-TOKEN with VALUE of req.csrfToken
  res.send('Hello World!');                           //  sending txt 'Hello World' as the response body
});





module.exports = router;
