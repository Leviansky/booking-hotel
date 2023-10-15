import React, { useEffect, useState } from "react";
import { Navbar, Carousels, Footer } from "../../components";
import { getAllBookingInOneCustomer } from "../../axios/authAxios";

const BookingPage = () => {
  const [bookings, setBookings] = useState([]);

  const getAllBookingHandler = async () => {
    let result = await getAllBookingInOneCustomer()
    setBookings(result)
  }

  const formatDate = (inputDate) => {
    const date = new Date(inputDate);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
  
    // Add leading zeros if necessary
    const formattedDay = day < 10 ? `0${day}` : day;
    const formattedMonth = month < 10 ? `0${month}` : month;
  
    const formattedDate = `${formattedDay}-${formattedMonth}-${year}`;
    return formattedDate;
  }

  useEffect(() => {
    getAllBookingHandler()
  });
  return (
    <>
      <Navbar isLogin={true} />
      <div className="container">
        <div className="row p-3">
          <hr />
          <h3 className="text-center">Bookings</h3>
          <hr />
          {
            bookings.map(booking => {
              console.log(booking)
              return <div class="card mb-3">
                <div class="card-body">
                  <div className="row">
                    <div className="col">
                      <h5 class="card-title">{booking.name}</h5>
                      <div className="col">
                        <span>
                          {/* <i class="fas fa-door-open me-2"></i>{booking.Room.roomNumbers} */}
                        </span>
                        <span>
                          <i class="fas fa-users ml-4 me-2"></i>{booking.total_customer} persons
                        </span>
                        <span>
                          <i class="fas fa-sign-in-alt ml-4 me-2"></i>
                          {formatDate(booking.dataCheckin)}
                        </span>
                        <span>
                          <i class="fas fa-sign-out-alt ml-4 me-2"></i>
                          {formatDate(booking.dataCheckout)}
                        </span>
                        <p class="card-text text-body-secondary mt-2">Total Price: Rp. {booking.Room.price}</p>
                      </div>
                    </div>
                    <div className="col text-end">
                      {
                        booking.status === 'unpaid'
                        ? <button className="btn btn-warning" disabled>
                            Unpaid
                          </button>
                        : <button className="btn btn-success" disabled>
                            Paid
                          </button>
                      }
                    </div>
                  </div>
                </div>
              </div>
            })
          }
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BookingPage;
