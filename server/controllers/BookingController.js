const { Booking, Customer, Hotel, Room } = require('../models');
const { decodeToken } = require('../helpers/jwt');

class BookingController {
    static async listAllOrder(req,res) {
        try {
            let result = await Booking.findAll({
                include: [Hotel, Room, Customer]
            })
            res.status(201).json(result)
        } catch (error) {
            res.status(500).json({ message: error.message })
        }
    }
    static async createBooking(req, res) {
        try {
            let CustomerId = decodeToken(req.headers.access_token).id;
            let {
                dataCheckin,
                dataCheckout,
                total_customer,
                status,
                HotelId,
                RoomId,
            } = req.body
            const created = await Booking.create({
                dataCheckin,
                dataCheckout,
                total_customer,
                status,
                CustomerId,
                HotelId,
                RoomId,
            })
            let room = await Room.findAll({
                where: {id: RoomId}
            })
            room.status = 'reserved';
            room.BookingId = created.id;
            let result = await Room.update(room, {
                where: {id:RoomId}
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
                include: [Hotel, Room]
            })

            if (customerBooking.length === 0) return res.status(200).json({ message: 'you doesnt have room booked yet' })

            res.status(200).json(customerBooking)

        } catch (err) {
            res.status(500).json({ message: err.message })
        }
    }

    static async completeBooking(req,res) {
        try {
            const id = +req.params.BookingId
            let booking = await Booking.findOne({
                where: {id}
            })
            const {RoomId} = booking
            let room = await Room.findAll({
                where: {id: RoomId}
            })
            room.status = 'available';
            let result = await Room.update(room, {
                where: {id:RoomId}
            })
            result[0] === 1
            ? res.status(200).json({message: "Booking has been completed"})
            : res.status(404).json({message: "Booking Not Found"});
        } catch (error) {
            res.status(500).json({ message: error.message })
        }
    }

    static async verifPayment(req,res) {
        try {
            const id = +req.params.BookingId
            let booking = await Booking.findOne({
                where: {id},
                include: [Room]
            })
            let { dataCheckin, dataCheckout, total_customer, status, CustomerId, HotelId, RoomId } = booking
            status = 'paid'
            let room = await Room.findAll({
                where: {id: RoomId}
            })
            room.status = 'occupied';
            let resultRoom = await Room.update(room, {
                where: {id:RoomId}
            })
            let result = await Booking.update({
                dataCheckin, dataCheckout, total_customer, status, CustomerId, HotelId, RoomId
            }, {
                where: {id}
            })
            result[0] === 1
            ? res.status(200).json({message: "Payment success"})
            : res.status(404).json({message: "Booking Not Found"});
        } catch (error) {
            res.status(500).json({ message: error.message })
        }
    }

    static async doneBooking(req,res) {
        try {
            
        } catch (error) {
            
        }
    }
}

module.exports = BookingController