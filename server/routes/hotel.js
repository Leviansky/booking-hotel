const { Router } = require('express')
const hotelRoute = Router()
const { HotelController, RoomController } = require('../controllers')
const { authAdmin, authUser } = require('../middleware/authentication')

//ALL USER
hotelRoute.get('/all', HotelController.listHotel)

//ADMIN
hotelRoute.post('/admin', authAdmin, HotelController.addHotel)
hotelRoute.put('/admin/:id', authAdmin, HotelController.editHotel)
hotelRoute.delete('/admin/:id', authAdmin, HotelController.deleteHotel)

// //CUSTOMER
hotelRoute.get('/', authUser, HotelController.listHotelAvailable)
hotelRoute.get('/:id', authUser, HotelController.findOneHotel)

module.exports = hotelRoute