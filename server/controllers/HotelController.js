const { hotel, room } = require('../models')


class HotelController {
    static async listHotel(req, res) {
        try {
            let hotels = await room.findAll({
                include: [hotel]
            })

            res.status(200).json(hotels)
        } catch (err) {
            res.status(500).json({ message: err.message })
        }
    }

    static async addHotel(req, res) {
        const { address, total_room } = req.body
        try {
            let created = await hotel.create({
                address, total_room
            })

            res.status(201).json({ message: 'hotel successfully added' })
        } catch (err) {
            EmptyResultError.status(500).json({
                message: err.message
            })
        }

    }

    static async editHotel(req, res) {
        try {
            const { address, total_room } = req.body
            const id = +req.params.id

            const found = await hotel.findByPk(id)
            if (!found) return res.status(404).json({ message: 'hotel not found' })

            let edited = await hotel.update({
                address, total_room
            }, {
                where: { id }
            })

            edited === 1 ?
                res.status(200).json({ message: 'hotel successfully updated' }) :
                res.sendStatus(400)

        } catch (err) {
            res.status(500).json({ message: err.message })
        }
    }

    static async removeHotel(req, res) {
        try {

            const id = +req.params.id

            const found = await hotel.findByPk(id)
            if (!found) return res.status(404).json({ message: 'hotel not found' })

            const result = await hotel.destroy({ where: { id } })

            result === 1 ?
                res.status(200).json({ message: 'hotel successfully removed' }) :
                res.sendStatus(400)
        } catch (err) {
            res.status(500).json({ message: err.mess })
        }
    }
}

module.exports = HotelController