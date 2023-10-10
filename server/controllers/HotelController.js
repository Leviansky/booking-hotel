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
        const { name, address, total_room } = req.body
        try {
            let created = await Hotel.create({
                name, address, total_room
            })
            res.status(201).json({ message: 'Hotel successfully added' })
        } catch (err) {
            res.status(500).json({message: err.message})
        }

    }

    static async editHotel(req, res) {
        try {
            const { address, total_room } = req.body
            const id = +req.params.id

            const found = await Hotel.findByPk(id)
            if (!found) return res.status(404).json({ message: 'Hotel not found' })

            let edited = await Hotel.update({
                address, total_room
            }, {
                where: { id }
            })

            edited === 1 ?
                res.status(200).json({ message: 'Hotel successfully updated' }) :
                res.sendStatus(400)

        } catch (err) {
            res.status(500).json({ message: err.message })
        }
    }

    static async removeHotel(req, res) {
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
}

module.exports = HotelController