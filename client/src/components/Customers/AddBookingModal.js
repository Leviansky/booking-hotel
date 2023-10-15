import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Booking, getOneHotel } from "../../axios/authAxios";

const AddBookingModal = ({room}) => {
  const [roomNumbers, setRoomNumbers] = useState(0);
  const [total_customer, setTotal_Customer] = useState(0);
  const [price, setPrice] = useState(0);
  const [RoomId, setRoomId] = useState(0);
  const [HotelId, setHotelId] = useState(0);
  const [dateCheckin, setDateCheckin] = useState(null);
  const [dateCheckout, setDateCheckout] = useState(null);

  const BookingHandler = async () => {
    let result = await Booking({
      dataCheckin: dateCheckin.toISOString(),
      dataCheckout: dateCheckout.toISOString(),
      total_customer: +total_customer,
      HotelId: +HotelId,
      RoomId: +RoomId,
    })
    console.log(result)
    getOneHotel(HotelId)
  }

  useEffect(() => {
    console.log(room)
    setRoomNumbers(room.roomNumbers)
    setPrice(room.price)
    setRoomId(room.idRoom)
    setHotelId(room.hotelId)
  }, [room])
  return (
    <div
      className="modal fade"
      id="addBookingModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="addBookingModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="addBookingModalLabel">
              Book Room
            </h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <form>
              <div className="form-group row">
                <label for="roomNumbers" className="col-sm-3 col-form-label">
                  Room Number
                </label>
                <div class="col-sm-9">
                  <input
                    type="text"
                    readonly
                    class="form-control-plaintext"
                    id="name"
                    value={`: ${roomNumbers}`}
                  />
                </div>
              </div>
              <div className="form-group row">
                <label for="price" className="col-sm-3 col-form-label">
                  Price
                </label>
                <div class="col-sm-9">
                  <input
                    type="text"
                    readonly
                    class="form-control-plaintext"
                    id="name"
                    value={`: Rp.${price}`}
                  />
                </div>
              </div>
              <div className="form-group row">
                <label for="name" className="col-sm-3 col-form-label">
                  Total Guest
                </label>
                <div class="col-sm-9">
                  <input type="text" class="form-control-plaintext" id="name" onChange={(e) => setTotal_Customer(e.target.value)}/>
                </div>
              </div>
              <div className="form-group row">
                <label for="dataCheckin" className="col-sm-3 col-form-label">
                  Check-in
                </label>
                <div class="col-sm-9">
                  :{" "}
                  <DatePicker
                    placeholderText="dd-mm-yyyy"
                    selected={dateCheckin}
                    onChange={(date) => setDateCheckin(date)}
                    dateFormat="dd-MM-yyyy"
                    showYearDropdown
                  />
                </div>
              </div>
              <div className="form-group row">
                <label for="dataCheckout" className="col-sm-3 col-form-label">
                  Check-out
                </label>
                <div class="col-sm-9">
                  :{" "}
                  <DatePicker
                    placeholderText="dd-mm-yyyy"
                    selected={dateCheckout}
                    onChange={(date) => setDateCheckout(date)}
                    dateFormat="dd-MM-yyyy"
                    showYearDropdown
                  />
                </div>
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-dismiss="modal"
            >
              Cancel
            </button>
            <button 
              type="button" 
              className="btn btn-primary"
              data-dismiss="modal"
              onClick={() => BookingHandler()}
            >
              Book
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddBookingModal;
