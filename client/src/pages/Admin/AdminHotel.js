import React, { useEffect, useState } from "react";
import "./Admin.css";
import { Link, useNavigate } from "react-router-dom";
import {
  AddHotelModal,
  AddRoomModal,
  AdminFooter,
  AdminNavbar,
  LogoutModal,
  SideBar,
  UpdateHotelModal,
} from "../../components";
import { getAllHotels } from "../../axios/authAxios";

const HotelAdmin = () => {
  const [hotels, setHotels] = useState([])

  const getData = async () => {
    let access_token = localStorage.getItem("access_token")
    let hotels = await getAllHotels(access_token)
    setHotels(hotels)
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

            <div className="container-fluid">
              <h1 className="h3 mb-2 text-gray-800 text-center">
                Hotels Controller
              </h1>

              <div className="card shadow mb-4">
                <div className="card-header p-3">
                  <div className="row">
                    <div className="col">
                      <h4 className="m-0 font-weight-bold text-primary">
                        Data Hotel
                      </h4>
                    </div>
                    <div className="col text-end">
                      <button
                        className="btn btn-primary"
                        data-toggle="modal"
                        data-target="#addHotelModal"
                      >
                        Add Data
                      </button>
                    </div>
                  </div>
                </div>
                <div className="card-body">
                  <div className="table-responsive">
                    <table
                      className="table table-bordered"
                      id="dataTable"
                      width="100%"
                      cellspacing="0"
                    >
                      <thead>
                        <tr>
                          <th>No</th>
                          <th>Hotel</th>
                          <th>Address</th>
                          <th>Room</th>
                          <th>Description</th>
                          <th>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1</td>
                          <td>
                            <div className="row">
                              <div className="col-4">
                                <img
                                  className="img-fluid rounded-circle"
                                  src="https://via.placeholder.com/100"
                                  alt=""
                                  srcset=""
                                />
                              </div>
                              <div className="col-8">
                                <h6>Nama Hotel</h6>
                                <span>hdhdh</span>
                              </div>
                            </div>
                          </td>
                          <td>Edinburgh</td>
                          <td>61</td>
                          <td>2011/04/25</td>
                          <td>
                            <button className="btn btn-warning">Update</button>
                            <button className="btn btn-danger">Delete</button>
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

      <AddHotelModal />
      <AddRoomModal />
      <UpdateHotelModal />
      <LogoutModal />
    </div>
  );
};

export default HotelAdmin;
