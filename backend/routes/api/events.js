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
// 5000 bc backend
// //localhost:5000/events/
// Creating a registration for an EVENT
router.post('/', asyncHandler( async(req, res) => {        // do i need require Auth here or bad for testing?
  const {userId, eventId } = req.body
  console.log(userId, eventId, 'backend side ---------------')

  const registerEvent = await UserEvent.create({userId, eventId})          // created a new instance of userId and eventId on userEvent table
  const event = await Event.findOne({
    where: {
      id:eventId
    },
  include:User              // adds a user object as the value of user to the event Object
})                        // will find an event based on a key of the eventId #

  event.ticketCount--
  await event.save()
  res.json(event)                        //
}))


// ------- DELETE------------------------------------------------------------------------//
// //localhost:3000/events/
router.delete('/',  asyncHandler( async(req, res) => {
  const {userId, eventId } = req.body

  const currentEvent = await Event.findOne({
    where: {
      id: eventId
    }
  })

  const userEvent = await UserEvent.findOne({
    where: {
      eventId: eventId,
      userId: userId
    },
  })

  currentEvent.ticketCount++
  await currentEvent.save();
  await userEvent.destroy();
  res.json(currentEvent)
}));

module.exports = router;
