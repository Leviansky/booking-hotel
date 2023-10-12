const { Room, Hotel } = require('../models')

class RoomController {
    static async addRoom(req, res) {
        try {
            //GET ID HOTEL FROM REQUEST PARAMS
            const id = +req.params.HotelId;

            //GET DATA FROM REQUEST BODY
            const { price } = req.body;

            //GET ALL ROOM WITH ID HOTEL
            let allRoom = await Room.findAll({
                where: {
                    HotelId: id
                },
                order: [
                    ['roomNumbers', 'asc']
                ]
            })

            //GET ALL HOTEL WITH ID HOTEL
            let allHotel = await Hotel.findAll({
                where: {id}
            })

            //DESTRUCTURING DATA FROM ALLHOTEL
            let { name, address, total_room } = allHotel[0]

            //CHANGE TOTAL ROOM IN HOTEL EQUALS TO ALL ROOM + 1
            total_room = allRoom.length + 1

            //UPDATE HOTEL WITH NEWEST DATA
            await Hotel.update({
                name, address, total_room
            }, {
                where: {id}
            })

            //CREATE ROOM
            let addRoom = await Room.create({
                roomNumbers:total_room, price, HotelId:id
            })
            
            //SEND RESULT SUCCESS
            res.status(200).json(addRoom);
        } catch (error) {
            //SEND RESULT ERROR
            res.status(500).json(error.message)
        }
    }

    static async deleteRoom(req,res) {
        try {
            //GET ID HOTEL FROM REQUEST PARAMS
            const HotelId = req.params.HotelId

            //GET ID ROOM FROM REQUEST PARAMS
            const id = req.params.RoomId

            //DELETE ONE ROOM WITH ID HOTEL AND ID ROOM
            let result = await Room.destroy({
                where: {
                    HotelId, id
                }
            })

            //SEND RESULT
            result === 1
            ? res.status(200).json({message: "Delete room success"})
            : res.status(404).json({message: "Room Not Found"});
        } catch (error) {
            //SEND RESULT ERROR
            res.status(500).json(error.message)
        }
    }

    static async updateRoom(req,res) {
        try {
            //GET ID ROOM FROM REQUEST PARAMS
            const id = +req.params.RoomId

            //DESTRUCTUING DATA FROM REQUEST BODY
            const {price} = req.body

            //UPDATE ROOM WITH NEWEST DATA
            let result = await Room.update({
                price
            }, {
                where: {id}
            })

            //SEND RESULT
            result[0] === 1
            ? res.status(200).json({message: "Delete room success"})
            : res.status(404).json({message: "Room Not Found"});
        } catch (error) {
            //SEND RESULT ERROR
            res.status(500).json(error.message)
        }
    }
}

module.exports = RoomController