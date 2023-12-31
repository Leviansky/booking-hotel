import React, { useEffect, useState } from "react";
import "./Admin.css";
import { Link, useNavigate } from "react-router-dom";
import {
  AddHotelModal,
  AddRoomModal,
  AdminFooter,
  AdminNavbar,
  DeleteHotelModal,
  DetailRoomModal,
  LogoutModal,
  SideBar,
  UpdateHotelModal,
  UpdateRoomModal,
} from "../../components";
import { getAllHotels } from "../../axios/authAxios";

const HotelAdmin = () => {
  const [hotels, setHotels] = useState([])
  const [selectedHotel, setSelectedHotel] = useState({})

  const getData = async () => {
    let hotels = await getAllHotels()
    console.log(hotels)
    setHotels(hotels)
  }

  const eventHandler = (hotel) => {
    setSelectedHotel(hotel)
  }

  useEffect(() => {
    getData()
  }, [hotels])

  return (
    <div className="admin">
      <div id="wrapper">
        <SideBar inActive={'hotel'} />

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
                        <i class="fas fa-plus-circle">Add Data</i>
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
                        {
                          hotels.map((hotel, index) => {
                            const {id, name, image, address, total_room, description, Rooms} = hotel
                            return <tr>
                            <td>{index+1}</td>
                            <td>
                              <div className="row">
                                <div className="col-4">
                                  <img
                                    className="img-thumbnail"
                                    src={image}
                                    alt=""
                                    srcset=""
                                  />
                                </div>
                                <div className="col-8">
                                  <h5>{name}</h5>
                                  <span>
                                    <ul class="list-group list-group-horizontal p-0 ">
                                      {
                                        Rooms.map(room => {
                                          return room.status === "available" ? (
                                            <li class="list-group-item p-0 ml-1">
                                              <button
                                                className="btn btn-success"
                                                disabled
                                                // data-toggle="modal"
                                                // data-target="#exampleModalToggle"
                                              >
                                                {room.roomNumbers}
                                              </button>
                                            </li>
                                          ) : (
                                            <li class="list-group-item p-0 ml-1">
                                              <button
                                                className="btn btn-secondary"
                                                disabled
                                                // data-toggle="modal"
                                                // data-target="#exampleModalToggle"
                                              >
                                                {room.roomNumbers}
                                              </button>
                                            </li>
                                          );
                                        })
                                      }
                                    </ul>
                                  </span>
                                  <span>
                                    <button
                                      className="btn btn-primary mt-3"
                                      data-toggle="modal"
                                      data-target="#addRoomModal"
                                      onClick={() => eventHandler(hotel)}
                                    >
                                      <i class="fas fa-plus-circle">Room</i>
                                    </button>
                                    {/* <button
                                      className="btn btn-warning mt-3 ml-3"
                                      data-toggle="modal"
                                      data-target="#updateRoomModal"
                                      onClick={() => eventHandler(hotel)}
                                    >
                                      <i className="fas fa-edit">Room</i>
                                    </button> */}
                                  </span>
                                </div>
                              </div>
                            </td>
                            <td>{address}</td>
                            <td>{total_room}</td>
                            <td>{description}</td>
                            <td>
                              <button
                                className="btn btn-warning"
                                data-toggle="modal"
                                data-target="#updateHotelModal"
                                onClick={() => eventHandler(hotel)}
                              >
                                <i className="fas fa-edit"></i>
                              </button>
                              <button
                                className="btn btn-danger"
                                data-toggle="modal"
                                data-target="#DeleteHotelModal"
                                onClick={() => eventHandler(hotel)}
                              >
                                <i className="fa fa-trash"></i>
                              </button>
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

      <AddHotelModal />
      <AddRoomModal hotel={selectedHotel}/>
      <UpdateHotelModal hotel={selectedHotel}/>
      <UpdateRoomModal />
      <DetailRoomModal />
      <DeleteHotelModal hotel={selectedHotel}/>
      <LogoutModal />
    </div>
  );
};

export default HotelAdmin;
