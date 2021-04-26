// backend/utils/validation.js
const { validationResult } = require('express-validator');

// middleware for formatting errors from express-validator middleware
// (to customize, see express-validator's documentation)
const handleValidationErrors = (req, _res, next) => {           // express middleware called handleValidationErrors takin in req, rest and next,
  const validationErrors = validationResult(req);                   // call validationResult from the express-validator package passing in the req

  if (!validationErrors.isEmpty()) {           // If there are no validation errors returned from the validationResult function, invoke the next middleware.
      const errors = validationErrors
      .array()
      .map((error) => `${error.msg}`);

    const err = Error('Bad request.');        // If there are validation errors, create an error with all the validation error messages
    err.errors = errors;
    err.status = 400;
    err.title = 'Bad request.';
    next(err);                               // THEN invoke the next error-handling middleware.
  }
  next();
};

module.exports = {
  handleValidationErrors,                   // The handleValidationErrors function is exported at the bottom of the file.
};
