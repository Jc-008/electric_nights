const router = require('express').Router();
const express = require('express')
const asyncHandler = require('express-async-handler');
const { setTokenCookie, requireAuth, restoreUser } = require('../../utils/auth');
const { Event, Category, User, UserEvent } = require('../../db/models');                                // will need to add additional models


// ------ GET ---------------------------------------------------------------------------//


// localhost:/3000 - homepage, will load if NO issues
router.get('/', asyncHandler( async(req, res) => {
  const events = await Event.findAll({                // finding all events
    include: {model:User}
  })
  res.json(events)                        //
}))




// ------- POST------------------------------------------------------------------------//

// //localhost:3000/events/id
// Creating a registration for an EVENT
router.post('/:id', asyncHandler( async(req, res) => {        // do i need require Auth here or bad for testing?
  const {userId, eventId } = req.body
  // console.log(userId)
  // console.log(eventId)

  const registerEvent = await UserEvent.create({userId, eventId})          // created a new instance of userId and eventId on userEvent table
  const event = await Event.findByPk(eventId)                           // will find an event based on a key of the eventId #
  res.json(events)                        //
}))


module.exports = router;
