const { Router } = require('express')
const roomRoute = Router()
const {authAdmin} = require('../middleware/authentication');
const { RoomController } = require('../controllers')

//ADMIN
roomRoute.post('/hotels/:HotelId/rooms', authAdmin, RoomController.addRoom);
roomRoute.put('/hotels/:HotelId/rooms/:RoomId', authAdmin, RoomController.updateRoom);
roomRoute.delete('/hotels/:HotelId/rooms/:RoomId', authAdmin, RoomController.deleteRoom);

module.exports = roomRoute