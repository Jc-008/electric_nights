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




// ------- post------------------------------------------------------------------------//

// //localhost:3000 - will need to add an new instance
// router.post('/:id', asyncHandler( async(req, res) => {
//   const {userId, eventId } = req.body
//   console.log(userId)
//   console.log(eventId)




//   res.json(events)                        //
// }))


module.exports = router;
