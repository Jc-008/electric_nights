const router = require('express').Router();
const express = require('express')
const asyncHandler = require('express-async-handler');
const Sequelize = require("sequelize")
const Op = Sequelize.Op
const { Event } = require('../../db/models')


// not Working!!
// localhost:5000/api/search/:potato      potato can be anything i want to reference params in store search.js
router.get('/:potato', asyncHandler(async (req, res) => {

  const userSearchInput = req.params.potato
  console.log(req.params.potato, '--------------- req.param results ')
  // console.log(userSearchInput, '-------------------')

  const searchedEvents = await Event.findAll({
    where: {
      [Op.or]: {
        title: {
          [Op.iLike]: `%${userSearchInput}%`
        },
        host: {
          [Op.iLike]: `%${userSearchInput}%`
        },
        location: {
          [Op.iLike]: `%${userSearchInput}%`
        },
        // ticketPrice: {
        //   [Op.iLike]: `%${userSearchInput}`
        // }
      }
    }
  });
  // console.log(searchedEvents)
  return res.json(searchedEvents);

}))

module.exports = router;
