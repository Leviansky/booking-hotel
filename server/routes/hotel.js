const { Router } = require('express')
const hotelRoute = Router()
const { HotelController } = require('../controllers')
const { authAdmin } = require('../middleware/authentication')

hotelRoute.get('/', authAdmin, HotelController.listHotel)
hotelRoute.post('/add', authAdmin, HotelController.addHotel)
hotelRoute.put('/edit', authAdmin, HotelController.editHotel)
hotelRoute.delete('/delete', authAdmin, HotelController.removeHotel)

module.exports = hotelRoute