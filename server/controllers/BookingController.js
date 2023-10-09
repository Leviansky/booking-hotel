const { booking, customer, hotel, room } = reqire('../models')

class BookingController {

    static async listBooking(req, res) {
        try {
            const id = +req.userData.id
            let books = await booking.findAll({
                include: [customer, hotel, room],
                order: ['id', 'asc']
            }, {
                where: { id }
            })

            if (books.length === 0) return res.status(200).json({ message: 'you doesnt have room booked yet' })

            res.status(200).json(books)

        } catch (err) {
            res.status(500).json({ message: err.message })
        }
    }

    static async bookingRoom(req, res) {
        try {

            const customerId = +req.userData.id

            const {
                dataCheckin,
                dataCheckout,
                total_Costumer,
                status,
                HotelId
            } = req.body

            const created = await booking.create({
                dataCheckin,
                dataCheckout,
                total_Costumer,
                status,
                customerId,
                HotelId
            })

            req.status(201).json({ message: 'hotel successfully booked' })

        } catch (err) {
            res.status(500).json({ message: err.message })
        }
    }


}

module.exports = BookingController