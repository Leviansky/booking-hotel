const { Booking, Customer, Hotel, Room } = require('../models');
const { decodeToken } = require('../helpers/jwt');

class BookingController {
    static async createBooking(req, res) {
        try {
            let CustomerId = decodeToken(req.headers.access_token).id;
            const {
                dataCheckin,
                dataCheckout,
                total_Costumer,
                status,
                HotelId,
            } = req.body

            const created = await Booking.create({
                dataCheckin,
                dataCheckout,
                total_Costumer,
                status,
                CustomerId,
                HotelId,
                CustomerId
            })

            res.status(201).json({ message: 'hotel successfully booked' })

        } catch (err) {
            res.status(500).json({ message: err.message })
        }
    }

    static async getAllOrderByOneCustomer(req, res) {
        try {
            const CustomerId = decodeToken(req.headers.access_token).id;
            let customerBooking = await Booking.findAll({
                where: {CustomerId},
                include: [Customer, Hotel]
            })

            if (customerBooking.length === 0) return res.status(200).json({ message: 'you doesnt have room booked yet' })

            res.status(200).json(customerBooking)

        } catch (err) {
            res.status(500).json({ message: err.message })
        }
    }
}

module.exports = BookingController