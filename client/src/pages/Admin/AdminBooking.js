import React, {useState, useEffect} from 'react'
import "./Admin.css";
import {
  AdminFooter,
  AdminNavbar,
  LogoutModal,
  SideBar,
} from "../../components";
import { getAllBookings } from '../../axios/authAxios';

const AdminBooking = () => {
  const [bookings, setBookings] = useState([])

  const getData = async () => {
    let access_token = localStorage.getItem("access_token")
    let bookings = await getAllBookings(access_token)
    console.log(bookings)
    setBookings(bookings)
  }

  useEffect(() => {
    getData()
  }, [])
  return (
    <div className="admin">
      <div id="wrapper">
        <SideBar />

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
                          <th>Payment</th>
                        </tr>
                      </thead>
                      <tbody>
                        {
                          bookings.map((booking, index) => {
                            const {Customer, Hotel, Room, dataCheckin, dataCheckout, status} = booking
                            return <tr>
                            <td>{index+1}</td>
                            <td>{Customer.name}</td>
                            <td>{Hotel.name}</td>
                            <td>{Room ? Room.name : 0}</td>
                            <td>{dataCheckin}</td>
                            <td>{dataCheckout}</td>
                            <td>{status}</td>
                            <td>
                              <button className="btn btn-warning">Update</button>
                              <button className="btn btn-danger">Delete</button>
                            </td>
                          </tr>
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

      <LogoutModal />
    </div>
  );
}

export default AdminBooking