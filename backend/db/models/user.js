'use strict';
const { Validator } = require('sequelize');
const bcrypt = require('bcryptjs');             // must import because using bcrypt below

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [3, 30],
        isNotEmail(value) {
          if (Validator.isEmail(value)) {               // custom validator to check if the username is an email.
            throw new Error('Cannot be an email.');     // if it is throw a new error with message ('Cannot be an email.')
          }
        },
      },
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [3, 256]
      },
    },
    hashedPassword: {
      type: DataTypes.STRING.BINARY,
      allowNull: false,
      validate: {
        len: [60, 60]
      },
    },
  },
  {         // These scopes help protect sensitive user information that should not be exposed the current session's user or to other users.
    defaultScope: {         // default scope set on the user model and certain items excluded during the query
      attributes: {
        exclude: ['hashedPassword', 'email', 'createdAt', 'updatedAt'],       // all but these fields will not be returned in the QUERY
      },
    },
    scopes: {       // used as finder objects, or functions returning finder objects, default scope can ONLY be an object
      currentUser: {
        attributes: { exclude: ['hashedPassword'] },
      },
      loginUser: {
        attributes: {},
      },
    },
  });


  // Define an instance method of: User.prototype.toSafeObject-----------------------------------------------------------
  //  below will return an OBJECT with the USER INSTANCE info that is safe to save to a JWT

  User.prototype.toSafeObject = function() { // remember, this cannot be an arrow function
    const { id, username, email } = this; // context will be the User instance
    return { id, username, email };
  };



  // Define an instance method of: User.prototype.validatePassword ----------------------------------------------------------
  User.prototype.validatePassword = function (password) {                 // accept a password string
    return bcrypt.compareSync(password, this.hashedPassword.toString());  // will return true if matches with the hashed password, if not returns false
  };



  //Define a static method of: User.getCurrentUserById  ----------------------------------------------------------------------
  User.getCurrentUserById = async function (id) {       // accepts an id
    return await User.scope('currentUser').findByPk(id);      // return a user with an id of the currentUser
  };



  // Define a static method of: User.login ------------------------------------------------------------------------------------
  /*
    that will accept an object with a credential and password key and find a User with a username or email with the specified credential using the loginUser scope.
      If a USER is FOUND, then validate the password by passing it into the instance's .validatePassword method.
      If the PASSWORD is VALID, then return the user with the currentUser scope.
  */

  User.login = async function ({ credential, password }) {        // accepts an object with credential and password key
    const { Op } = require('sequelize');
    const user = await User.scope('loginUser').findOne({        // find one user by using scope on the USER
      where: {
        [Op.or]: {                                              // using username OR email
          username: credential,
          email: credential,
        },
      },
    });
    if (user && user.validatePassword(password)) {
      return await User.scope('currentUser').findByPk(user.id);     // if the password is VALID, return the current user's id
    }
  };

  /*
  Define a static method, User.signup in the user.js model file that will accept an object with a username, email and password key.
    Hash the password using bcryptjs package's hashSync method.
      Create a User with the username, email, and hashedPassword.
        Return the created user with the currentUser scope.
  */

  User.signup = async function ({ username, email, password }) {  // accepts an object with username, email and password key.
    const hashedPassword = bcrypt.hashSync(password);             // hashing NORMAL password with bcrypt
    const user = await User.create({                    // create a new user with the username, email and hashed PW
      username,
      email,
      hashedPassword,
    });
    return await User.scope('currentUser').findByPk(user.id);     // return the newly created user with the currentUser
  };


  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};
