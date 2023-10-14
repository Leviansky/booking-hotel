import React, {useState, useEffect} from 'react'
import "./Admin.css";
import {
  AdminFooter,
  AdminNavbar,
  ApprovePaymentModal,
  CheckoutModal,
  LogoutModal,
  SideBar,
} from "../../components";
import { getAllBookings } from '../../axios/authAxios';

const AdminBooking = () => {
  const [bookings, setBookings] = useState([])
  const [selectedBooking, setSelectedBooking] = useState({})

  const getData = async () => {
    let bookings = await getAllBookings()
    setBookings(bookings)
  }

  const eventHandler = (bookings) => {
    setSelectedBooking(bookings)
  }

  useEffect(() => {
    getData()
  }, [bookings])
  return (
    <div className="admin">
      <div id="wrapper">
        <SideBar inActive={"booking"}/>

        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <AdminNavbar />

            <div class="container-fluid">
              <h1 class="h3 mb-2 text-gray-800 text-center">
                Bookings Controller
              </h1>

              <div class="card shadow mb-4">
                <div className="card-header p-3">
                  <div className="row">
                    <div className="col">
                      <h4 className="m-0 font-weight-bold text-primary">
                        Data Booking
                      </h4>
                    </div>
                  </div>
                </div>
                <div class="card-body">
                  <div class="table-responsive">
                    <table
                      class="table table-bordered"
                      id="dataTable"
                      width="100%"
                      cellspacing="0"
                    >
                      <thead>
                        <tr>
                          <th>No</th>
                          <th>Customer</th>
                          <th>Hotel</th>
                          <th>Room</th>
                          <th>Check In</th>
                          <th>Check Out</th>
                          <th>Status</th>
                          <th>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {
                          bookings.map((booking, index) => {
                            const {id, Customer, Hotel, Room, dataCheckin, dataCheckout, status} = booking
                            return (
                              <tr>
                                <td>{index + 1}</td>
                                <td>{Customer.name}</td>
                                <td>{Hotel.name}</td>
                                <td>{Room ? Room.roomNumbers : 0}, {Room ? Room.status : 'error'}</td>
                                <td>{dataCheckin}</td>
                                <td>{dataCheckout}</td>
                                <td>{status}</td>
                                <td>
                                  {
                                    status === 'unpaid'
                                    ? <button
                                        className="btn btn-success"
                                        data-toggle="modal"
                                        data-target="#approvePaymentModal"
                                        onClick={() => eventHandler(id)}
                                      >
                                        Approve
                                      </button>
                                    : Room.status === 'occupied'
                                      ? <button
                                        className="btn btn-danger"
                                        data-toggle="modal"
                                        data-target="#checkoutModal"
                                        onClick={() => eventHandler(id)}
                                        >
                                          Check Out
                                        </button>
                                      : <></>
                                  }
                                </td>
                              </tr>
                            );
                          })
                        }
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <AdminFooter />
        </div>
      </div>

      <ApprovePaymentModal booking={bookings}/>
      <CheckoutModal booking={bookings}/>
      <LogoutModal />
    </div>
  );
}

export default AdminBooking