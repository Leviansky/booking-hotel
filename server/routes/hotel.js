const { Router } = require('express')
const hotelRoute = Router()
const { HotelController } = require('../controllers')
const { authUser, adminOnly } = require('../middleware/authentication')

hotelRoute.get('/', authUser, adminOnly, HotelController.listHotel)
hotelRoute.post('/add', authUser, adminOnly, HotelController.addHotel)
hotelRoute.put('/edit', authUser, adminOnly, HotelController.editHotel)
hotelRoute.delete('/delete', authUser, adminOnly, HotelController.removeHotel)

module.exports = hotelRoute