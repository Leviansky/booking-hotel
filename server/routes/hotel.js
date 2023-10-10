const { Router } = require('express')
const hotelRoute = Router()
const { HotelController, RoomController } = require('../controllers')
const { authAdmin } = require('../middleware/authentication')

hotelRoute.get('/', authAdmin, HotelController.listHotel)
hotelRoute.post('/', authAdmin, HotelController.addHotel)
hotelRoute.put('/', authAdmin, HotelController.editHotel)
hotelRoute.delete('/', authAdmin, HotelController.removeHotel)

// hotelRoute.get('/:HotelId/', authAdmin, HotelController.detailHotel);
hotelRoute.post('/:HotelId/add-room', authAdmin, RoomController.addRoom);

module.exports = hotelRoute