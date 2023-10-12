const { Booking, Customer, Hotel, Room } = require('../models');
const { decodeToken } = require('../helpers/jwt');

class BookingController {
    static async listAllOrder(req,res) {
        try {
            //GET FIND ALL BOOKING INCLUDE HOTEL, ROOM AND CUSTOMER.
            let result = await Booking.findAll({
                include: [Hotel, Room, Customer],
                order: [
                    ['createdAt', 'desc']
                ]
            })

            //SEND RESULT SUCCESS
            res.status(201).json(result)
        } catch (error) {
            //SEND RESULT ERROR
            res.status(500).json({ message: error.message })
        }
    }
    static async createBooking(req, res) {
        try {
            //GET ID CUSTOMER FROM REQUEST USER IN MIDDLEWARE
            let CustomerId = req.user.id;

            //GET DATA BOOKING FROM REQUEST BODY
            let {
                dataCheckin,
                dataCheckout,
                total_customer,
                status,
                HotelId,
                RoomId,
            } = req.body

            //CREATE BOOKING WITH DATA
            const created = await Booking.create({
                dataCheckin,
                dataCheckout,
                total_customer,
                status,
                CustomerId,
                HotelId,
                RoomId,
            })

            //GET FIND ALL ROOM FROM ID ROOM
            let room = await Room.findAll({
                where: {id: RoomId}
            })
            
            //CHANGE STATUS AND ID BOOKING IN ROOM
            room.status = 'reserved';
            room.BookingId = created.id;

            //UPDATE CHANGED DATA ROOM
            let result = await Room.update(room, {
                where: {id:RoomId}
            })

            //SEND RESULT SUCCESS
            res.status(201).json({ message: 'hotel successfully booked' })
        } catch (err) {
            //SEND RESULT ERROR
            res.status(500).json({ message: err.message })
        }
    }

    static async getAllOrderByOneCustomer(req, res) {
        try {
            //GET ID CUSTOMER FROM REQUEST USER IN MIDDLEWARE
            const CustomerId = req.user.id;

            //GET FIND ALL BOOKING WITH ID CUSTOMER, INCLUDE HOTEL AND ROOM
            let customerBooking = await Booking.findAll({
                where: {CustomerId},
                include: [Hotel, Room],
                order: [
                    ['createdAt', 'desc']
                ]
            })

            //IF THERE'S NO ONE BOOKING
            if (customerBooking.length === 0) return res.status(200).json({ message: 'you doesnt have room booked yet' })

            //SEND RESULT SUCCESS
            res.status(200).json(customerBooking)
        } catch (err) {
            //SEND RESULT ERROR
            res.status(500).json({ message: err.message })
        }
    }

    static async completeBooking(req,res) {
        try {
            //GET ID BOOKING FROM REQUEST PARAMS
            const id = +req.params.BookingId

            //GET FIND ONE BOOKING WITH ID BOOKING
            let booking = await Booking.findOne({
                where: {id}
            })

            //DESTRUCTURING ROOM ID FROM BOOKING
            const {RoomId} = booking

            //GET FIND ALL ROOM WITH ID ROOM
            let room = await Room.findAll({
                where: {id: RoomId}
            })

            //CHANGE STATUS ROOM TO AVAILABLE
            room.status = 'available';

            //UPDATE CHANGED STATUS ROOM
            let result = await Room.update(room, {
                where: {id:RoomId}
            })

            //SEND RESULT
            result[0] === 1
            ? res.status(200).json({message: "Booking has been completed"})
            : res.status(404).json({message: "Booking Not Found"});
        } catch (error) {
            //SEND RESULT ERROR
            res.status(500).json({ message: error.message })
        }
    }

    static async verifPayment(req,res) {
        try {
            //GET ID BOOKING FROM REQUEST PARAMS
            const id = +req.params.BookingId

            //GET FIND ONE ID BOOKING WITH ID, INCLUDE ROOM
            let booking = await Booking.findOne({
                where: {id},
                include: [Room]
            })
            
            //DESTRUCTURING DATA BOOKING
            let { dataCheckin, dataCheckout, total_customer, status, CustomerId, HotelId, RoomId } = booking
            
            //CHANGE STATUS BOOKING
            status = 'paid'

            //GET ONE ROOM WITH ID ROOM
            let room = await Room.findOne({
                where: {id: RoomId}
            })

            //CHANGE STATUS ROOM
            room.dataValues.status = 'occupied';

            //DESTRUCTURING DATA IN ROOM
            const { roomNumbers, price } = room;
            
            //UPDATE CHANGED STATUS ROOM
            let resultRoom = await Room.update({
                id: RoomId,
                roomNumbers,
                price,
                status:room.status,
                HotelId
            }, {
                where: {id:RoomId}
            })
            
            //UPDATE CHANGED STATUS DATA BOOKING
            let result = await Booking.update({
                dataCheckin, dataCheckout, total_customer, status, CustomerId, HotelId, RoomId
            }, {
                where: {id}
            })

            //SEND RESULT
            result[0] === 1
            ? res.status(200).json({message: "Payment success"})
            : res.status(404).json({message: "Booking Not Found"});
        } catch (error) {
            //SEND RESULT ERROR
            res.status(500).json({ message: error.message })
        }
    }
}

module.exports = BookingController