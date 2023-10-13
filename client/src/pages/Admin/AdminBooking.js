import React from 'react'
import "./Admin.css";
import {
  AddBookingModal,
  AdminFooter,
  AdminNavbar,
  LogoutModal,
  SideBar,
} from "../../components";

const AdminBooking = () => {
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
                          <th>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1</td>
                          <td>System Architect</td>
                          <td>Edinburgh</td>
                          <td>61</td>
                          <td>2011/04/25</td>
                          <td>sss</td>
                          <td>sss</td>
                          <td>
                            <button className="btn btn-primary">Payment</button>
                          </td>
                        </tr>
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

      <AddBookingModal />
      <LogoutModal />
    </div>
  );
}

export default AdminBooking