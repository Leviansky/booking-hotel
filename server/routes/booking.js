const bookingRoute = require('express').Router();
const { BookingController } = require('../controllers');
const {authUser, authAdmin} = require('../middleware/authentication');

//ADMIN
bookingRoute.get('/booking/list-all', authAdmin, BookingController.listAllOrder);
bookingRoute.post('/booking/:BookingId/payment', authAdmin, BookingController.verifPayment)
bookingRoute.delete('/booking/:BookingId', authAdmin, BookingController.completeBooking)

//CUSTOMER
bookingRoute.post('/booking', authUser, BookingController.createBooking);
bookingRoute.get('/booking/list', authUser, BookingController.getAllOrderByOneCustomer);
// bookingRoute.get('/customer/:customerId/booking/:bookingId', BookingController.getDetailBooking);

module.exports = bookingRoute;
