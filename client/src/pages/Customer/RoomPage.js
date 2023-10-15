import React, { useEffect, useState } from "react";
import { Navbar, Footer } from "../../components";
import Swal from "sweetalert2";
import "./Room.css";
import AddBookingModal from "../../components/Customers/AddBookingModal";
import { useLocation } from 'react-router-dom';
import { getOneHotel } from "../../axios/authAxios";

const RoomPage = () => {
  const location = useLocation();
  const [hotelId, setHotelId] = useState(null);
  const [hotel, setHotel] = useState({});
  const [rooms, setRooms] = useState([]);
  const [roomNumbers, setRoomNumbers] = useState(0);
  const [price, setPrice] = useState(0);
  const [idRoom, setIdRoom] = useState(0);

  const getHotel = async() => {
    let result = await getOneHotel(hotelId)
    setHotel(result)
    setRooms(result.Rooms)
  }

  const setRoom = (number, price, id) => {
    setRoomNumbers(number)
    setPrice(price)
    setIdRoom(id);
  }

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    setHotelId(params.get('id'));
    if(hotelId !== null) {
      getHotel(hotelId)
    }
  }, [hotelId, hotel]);

  const bookHandler = async () => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger",
      },
      buttonsStyling: false,
    });

    swalWithBootstrapButtons
      .fire({
        title: `ROOM ${roomNumbers}: Rp10000000`,
        text: "Are you sure want to book this room?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes",
        cancelButtonText: "No",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          swalWithBootstrapButtons.fire(
            "Success!",
            "You successfully booked this room.",
            "success"
          );
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire("Cancelled", "Cancel", "error");
        }
      });
  };
  return (
    <div>
      <Navbar isLogin={true} />
      <div className="container">
        <div className="row p-3">
          <hr />
          <h3 className="text-center">{hotel.name}</h3>
          <hr />
          <div className="rooms p-3">
            <div className="row">
              <div className="col">
                <div className="row">
                  <span>
                    <i className="fa fa-map-marker me-3"></i>
                    {hotel.address}
                  </span>
                  <span>
                    <i className="fas fa-building me-3"></i>
                    {hotel.description}
                  </span>
                </div>
              </div>
              <div className="col img-thumbnail ">
                <img
                  src={hotel.image}
                  alt="About Page"
                />
              </div>
            </div>
          </div>
          <div>
            <h5>Room</h5>
          </div>
          <ul class="list-group list-group-horizontal p-3">
            {
              rooms.map(room => {
                const {id, roomNumbers, price, status} = room
                return status === 'available'
                ? <li class="list-group-item p-3">
                    <button
                      className="btn btn-success"
                      data-toggle="modal"
                      data-target="#addBookingModal"
                      onClick={() => setRoom(roomNumbers, price, id)}
                    >
                      {roomNumbers}
                    </button>
                  </li>
                : <li class="list-group-item p-3">
                    <button type="button" class="btn btn-secondary" disabled>
                      {roomNumbers}
                    </button>
                  </li>
              })
            }
          </ul>
        </div>
      </div>
      <Footer />
      <AddBookingModal room={{roomNumbers, price, idRoom, hotelId}} />
    </div>
  );
};

export default RoomPage;
