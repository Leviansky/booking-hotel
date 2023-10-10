const { Room, Hotel } = require('../models')

class RoomController {

    static async listRoom(req, res) {

    }

    static async addRoom(req, res) {
        try {
            const id = +req.params.HotelId;
            const { price } = req.body;
            let allRooms = await Hotel.findAll({
                where: {id}
            })
            let { name, address, total_room } = allRooms[0]
            total_room+=1
            let result = await Hotel.update({
                name, address, total_room
            }, {
                where: {id}
            })
            let addRoom = await Room.create({
                roomNumbers:total_room, price, HotelId:id
            })
            res.status(200).json(addRoom);
        } catch (error) {
            res.status(500).json(error.message)
        }
    }

}

module.exports = RoomController