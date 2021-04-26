// created to set up the EXPRESS application

const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const csurf = require('csurf');
const helmet = require('helmet');
const cookieParser = require('cookie-parser');
const { environment } = require('./config');
const routes = require('./routes');
const { ValidationError } = require('sequelize');           // for the sequelize validation error handler

const isProduction = environment === 'production';          // created to check if the ENVIRONMENT KEY is in production or not.


const app = express();              // initialize the express app.
// const router = express.Router();

app.use(morgan('dev'));             // connect to the morgan middleware to log info about requests and responses.
app.use(cookieParser());            // cookie-parser middleware for parsing cookies
app.use(express.json());            // express middleware to parse JSON body of requests with *"Content-Type of "application/json"*



// Set the _csrf token and create req.csrfToken method ---------------------------------------------------------------------------------------
app.use(                                    // NEED CSURF before routes (line 43)
  csurf({                                                 // will add a _csrf cookie that is HTTP - ONLY (can't be read by JS)
    cookie: {
      secure: isProduction,
      sameSite: isProduction && "Lax",
      httpOnly: true,
    },
  })
);

/* FOR ABOVE ^
It also adds a method on all requests (req.csrfToken) that will be set to another cookie (XSRF-TOKEN) later on.
 These two cookies work together to provide CSRF (Cross-Site Request Forgery) protection for your application.
  The XSRF-TOKEN cookie value needs to be sent in the header of any request with all HTTP verbs besides GET.
   This header will be used to validate the _csrf cookie to confirm that that the request comes from your site and not an unauthorized site.
*/


app.use(routes);             // connect all the routes


/* -------------------------------------------------------------------------------------------------------------------------
Catch unhandled requests, requests that don't match any of the routes that were defined above
  and
forward to error handler with status of 404.
*/

app.use((_req, _res, next) => {
  const err = new Error("The requested resource couldn't be found.");
  err.title = "Resource Not Found";
  err.errors = ["The requested resource couldn't be found."];
  err.status = 404;
  next(err);                  // error will be sent to next if error handlers are defined and middleware is invoked.
});



// Process sequelize errors ----------------------------------------------------------------------------------------------------
/*    if an error here, there was an error that was created for a sequelize database validation error.
    the additional keys of title string and errors array will be ADDED to the error and passed into the next error handling middleware.
*/

app.use((err, _req, _res, next) => {
  // check if error is a Sequelize error:
  if (err instanceof ValidationError) {
    err.errors = err.errors.map((e) => e.message);
    err.title = 'Validation error';
  }
  next(err);
});



// Error formatter ---------------------------------------------------------------------------------------------------------------
/*    LAST error handler for formatting all the errors before returning a JSON RESPONSE.
    (with an error message, error arrays and error stack trace (if applicable)
  with the status code of the error message.
*/

app.use((err, _req, res, _next) => {
  res.status(err.status || 500);
  console.error(err);
  res.json({
    title: err.title || 'Server Error',
    message: err.message,
    errors: err.errors,
    stack: isProduction ? null : err.stack,
  });
});










// Security Middleware
if (!isProduction) {                    // if not in production mode
  // enable cors only in development
  app.use(cors());
}


// helmet helps set a variety of headers to better secure your app

app.use(helmet({                        // This disables the `contentSecurityPolicy` middleware but keeps the rest.
  contentSecurityPolicy: false
}));



module.exports = app;
