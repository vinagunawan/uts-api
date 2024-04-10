const express = require('express');
const book_hotel = require('../services/book_hotel');
const router = express.Router();

//post
router.post('/', async function (req, res, next) {
    try {
        res.json(await book_hotel.createBookingRoom(req.body));
    } catch (err){
        console.error(`Error in creating booking room`, err.message);
        next (err);
    }
});

//get
router.get('/', async function(req, res, next) {
  try {
    res.json(await book_hotel.getAllBookingRoom());
  } catch (err) {
    console.error(`Error in getting booking room `, err.message);
    next(err);
  }
});

//put
router.put('/:id', async function(req, res, next) {
    try {
      res.json(await book_hotel.updateBookingRoom(req.params.id, req.body));
    } catch (err) {
      console.error(`Error in update booking room`, err.message);
      next(err);
    }
});

//delete
router.delete('/:id', async function(req, res, next) {
    try {
      res.json(await book_hotel.deleteBookingRoom(req.params.id));
    } catch (err) {
      console.error(`Error in deleting booking room`, err.message);
      next(err);
    }
});
  
module.exports = router;