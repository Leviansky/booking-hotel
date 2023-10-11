const { Hotel, Room } = require('../models')


class HotelController {
    static async listHotel(req, res) {
        try {
            let hotels = await Hotel.findAll({
                include: [Room]
            })

            res.status(200).json(hotels)
        } catch (err) {
            res.status(500).json({ message: err.message })
        }
    }

    static async addHotel(req, res) {
        const { name, address } = req.body
        try {
            let created = await Hotel.create({
                name, address
            })
            res.status(201).json({ message: 'Hotel successfully added' })
        } catch (err) {
            res.status(500).json({message: err.message})
        }

    }

    static async editHotel(req, res) {
        try {
            const { name, address } = req.body
            const id = +req.params.id

            const found = await Hotel.findByPk(id)
            if (!found) return res.status(404).json({ message: 'Hotel not found' })

            let edited = await Hotel.update({
                name, address
            }, {
                where: { id }
            })

            edited[0] === 1 ?
                res.status(200).json({ message: 'Hotel successfully updated' }) :
                res.sendStatus(400)

        } catch (err) {
            res.status(500).json({ message: err.message })
        }
    }

    static async deleteHotel(req, res) {
        try {

            const id = +req.params.id

            const found = await Hotel.findByPk(id)
            if (!found) return res.status(404).json({ message: 'Hotel not found' })

            const result = await Hotel.destroy({ where: { id } })

            result === 1 ?
                res.status(200).json({ message: 'hotel successfully removed' }) :
                res.sendStatus(400)
        } catch (err) {
            res.status(500).json({ message: err.mess })
        }
    }

    static async listHotelAvailable(req, res) {
        try {
            let hotels = await Hotel.findAll({
                include: [Room]
            })
            let result = []
            hotels.map(hotel => {
                let Room = []
                hotel.Rooms.forEach(room => {
                    if(room.dataValues.status === 'available') {
                        Room.push(room)
                    }
                })
                hotel.dataValues.Rooms = Room;
                result.push(hotel.dataValues)
                return hotel
            })

            res.status(200).json(result)
        } catch (err) {
            res.status(500).json({ message: err.message })
        }
    }
}

module.exports = HotelController