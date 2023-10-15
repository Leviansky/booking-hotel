const { Hotel, Room, Booking } = require('../models')


class HotelController {
    static async listHotel(req, res) {
        try {
            //GET ALL HOTEL INCLUDE ROOM
            let hotels = await Hotel.findAll({
                include: [Room],
                order: [
                    ['id', 'asc']
                ]
            })

            hotels.forEach((hotel) => {
                hotel.Rooms.sort((a, b) => a.roomNumbers - b.roomNumbers);
            });

            //SEND RESULT SUCCESS
            res.status(200).json(hotels)
        } catch (err) {
            //SEND RESULT ERROR
            res.status(500).json({ message: err.message })
        }
    }

    static async findOneHotel(req,res) {
        try {
            const id = +req.params.id
            let hotel = await Hotel.findOne({
                where: {id},
                include: [Room]
            })

            hotel.Rooms.sort((a, b) => a.roomNumbers - b.roomNumbers);

            res.status(200).json(hotel)
        } catch (err) {
            //SEND RESULT ERROR
            res.status(500).json({ message: err.message })
        }
    }

    static async addHotel(req, res) {
        try {
            //GET DATA FROM REQUEST BODY
            const { name, image, description, address } = req.body

            //CREATE ONE HOTEL
            let created = await Hotel.create({
                name, image, description, address
            })

            //SEND RESULT SUCCESS
            res.status(201).json({ message: 'Hotel successfully added' })
        } catch (err) {
            //SEND RESULT ERROR
            res.status(500).json({message: err.message})
        }

    }

    static async editHotel(req, res) {
        try {
            //GET DATA FROM REQUEST BODY
            const { name, image, description, address } = req.body

            //GET ID FROM REQUEST PARAMS
            const id = +req.params.id

            //GET ONE HOTEL BY PRIMARY KEY
            const found = await Hotel.findByPk(id)

            //SEND 404 IF THERE'S NO ONE HOTEL FOUND
            if (!found) return res.status(404).json({ message: 'Hotel not found' })

            //UPDATE HOTEL WITH NEWEST DATA
            let edited = await Hotel.update({
                name, image, description, address
            }, {
                where: { id }
            })

            //SEND RESULT
            edited[0] === 1 ?
                res.status(200).json({ message: 'Hotel successfully updated' }) :
                res.sendStatus(400)
        } catch (err) {
            //SEND RESULT ERROR
            res.status(500).json({ message: err.message })
        }
    }

    static async deleteHotel(req, res) {
        try {
            //GET ID FROM REQUEST PARAMS
            const id = +req.params.id

            //SEARCH ONE HOTEL BY PRIMARY KEY
            const found = await Hotel.findByPk(id)

            //SEND 404 IF THERE'S NO ONE HOTEL FOUND
            if (!found) return res.status(404).json({ message: 'Hotel not found' })

            //DELETE ONE HOTEL BY ID
            const result = await Hotel.destroy({ where: { id } })

            await Booking.destroy({
                where: {HotelId: id}
            })

            await Room.destroy({
                where: {HotelId: id}
            })

            //SEND RESULT
            result === 1 ?
                res.status(200).json({ message: 'hotel successfully removed' }) :
                res.sendStatus(400)
        } catch (err) {
            //SEND RESULT ERROR
            res.status(500).json({ message: err.mess })
        }
    }

    static async listHotelAvailable(req, res) {
        try {
            //GET ALL HOTEL INCLUDE ROOM
            let hotels = await Hotel.findAll({
                include: [Room]
            })
            
            //DECLARE RESULT ARRAY
            let result = []

            //LOOPING HOTELS WITH MAP
            hotels.map(hotel => {
                //DECLARE ROOM ARRAY
                let Room = []

                //LOOPING ROOM IN HOTEL.ROOM
                hotel.Rooms.forEach(room => {
                    //IF STATUS ROOM AVAILABLE
                    if(room.dataValues.status === 'available') {
                        //SAVE NEW DATA ROOM TO ROOM ARRAY
                        Room.push(room)
                    }
                })
                //SAVE ROOM ARRAY TO HOTEL.ROOM
                hotel.dataValues.Rooms = Room;
                
                //SAVE NEW DATA HOTEL TO RESULT ARRAY
                result.push(hotel.dataValues)
                return hotel
            })
            
            //SEND RESULT SUCCESS
            res.status(200).json(result)
        } catch (err) {
            //SEND RESULT ERROR
            res.status(500).json({ message: err.message })
        }
    }
}

module.exports = HotelController