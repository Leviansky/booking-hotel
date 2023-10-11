const { Room, Hotel } = require('../models')

class RoomController {
    static async addRoom(req, res) {
        try {
            const id = +req.params.HotelId;
            const { price } = req.body;
            let allRoom = await Room.findAll({
                where: {
                    HotelId: id
                }
            })
            let allHotel = await Hotel.findAll({
                where: {id}
            })
            let { name, address, total_room } = allHotel[0]
            total_room = allRoom.length + 1
            await Hotel.update({
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

    static async deleteRoom(req,res) {
        try {
            const HotelId = req.params.HotelId
            const id = req.params.RoomId
            let result = await Room.destroy({
                where: {
                    HotelId, id
                }
            })
            result === 1
            ? res.status(200).json({message: "Delete room success"})
            : res.status(404).json({message: "Room Not Found"});
        } catch (error) {
            res.status(500).json(error.message)
        }
    }

    static async updateRoom(req,res) {
        try {
            const id = +req.params.RoomId
            const {price} = req.body
            let result = await Room.update({
                price
            }, {
                where: {id}
            })
            result[0] === 1
            ? res.status(200).json({message: "Delete room success"})
            : res.status(404).json({message: "Room Not Found"});
        } catch (error) {
            res.status(500).json(error.message)
        }
    }
}

module.exports = RoomController