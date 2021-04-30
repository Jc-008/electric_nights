const router = require('express').Router();
const express = require('express')
const asyncHandler = require('express-async-handler');
const { setTokenCookie, requireAuth, restoreUser } = require('../../utils/auth');
const { Event, Category, User } = require('../../db/models');                                // will need to add additional models



// localhost:5000/ - homepage, will load if NO issues
router.get('/', asyncHandler( async(req, res) => {
  const events = await Event.findAll({
    include: {model:User}
  })    // finding all events
  res.json(events)                        //
}))

module.exports = router;
