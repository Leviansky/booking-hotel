const bookingRoute = require('express').Router();
const { BookingController } = require('../controllers');
const {authUser} = require('../middleware/authentication');

bookingRoute.post('/booking', authUser, BookingController.createBooking);
bookingRoute.get('/booking/list', authUser, BookingController.getAllOrderByOneCustomer);
// bookingRoute.get('/customer/:customerId/booking/:bookingId', BookingController.getDetailBooking);


// bookingRoute.get('/booking/list', authUser, BookingController.listBooking);
module.exports = bookingRoute;
