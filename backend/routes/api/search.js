const router = require('express').Router();
const express = require('express')
const asyncHandler = require('express-async-handler');
const Sequelize = require("sequelize")
const Op = Sequelize.Op
const { Event } = require('../../db/models')


// not Working!!

router.get('/search', asyncHandler(async (req, res) => {

  const userSearchInput = req.params.events
  console.log(req.params, '--------------- req.param results ')
  // console.log(userSearchInput, '-------------------')

  const searchedEvents = await Event.findAll({
    where: {
      [Op.or]: {
        title: {
          [Op.iLike]: `%${userSearchInput}`
        },
        host: {
          [Op.iLike]: `%${userSearchInput}`
        },
        location: {
          [Op.iLike]: `%${userSearchInput}`
        },
        ticketPrice: {
          [Op.iLike]: `%${userSearchInput}`
        }
      }
    }
  })
  // console.log(searchedEvents)
  return res.json(searchedEvents);

}))

module.exports = router;
