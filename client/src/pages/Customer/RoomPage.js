import React, { useEffect, useState } from "react";
import { Navbar, Footer } from "../../components";
import Swal from "sweetalert2";
import "./Room.css";
import AddBookingModal from "../../components/Customers/AddBookingModal";

const RoomPage = () => {
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
        title: "ROOM (NUMBER): Rp10000000",
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
          <h3 className="text-center">Hotel Name</h3>
          <hr />
          <div className="rooms p-3">
            <div className="row">
              <div className="col">
                <div className="row">
                  <span>
                    <i className="fa fa-map-marker me-3"></i>
                    Address
                  </span>
                  <span>
                    <i className="fas fa-building me-3"></i>
                    Description Hotel
                  </span>
                </div>
              </div>
              <div className="col img-thumbnail ">
                <img
                  src="https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt="About Page"
                />
              </div>
            </div>
          </div>
          <div>
            <h5>Room</h5>
          </div>
          <ul class="list-group list-group-horizontal p-3">
            <li class="list-group-item p-3">
              <button
                className="btn btn-success"
                data-toggle="modal"
                data-target="#addBookingModal"
              >
                1
              </button>
            </li>
            <li class="list-group-item p-3">
              <button type="button" class="btn btn-secondary" disabled>
                2
              </button>
            </li>
            <li class="list-group-item p-3">
              <button
                type="button"
                class="btn btn-success"
                onClick={() => bookHandler()}
              >
                3
              </button>
            </li>
            <li class="list-group-item p-3">
              <button type="button" class="btn btn-secondary" disabled>
                4
              </button>
            </li>
            <li class="list-group-item p-3">
              <button
                type="button"
                class="btn btn-success"
                onClick={() => bookHandler()}
              >
                5
              </button>
            </li>
            <li class="list-group-item p-3">
              <button type="button" class="btn btn-secondary" disabled>
                6
              </button>
            </li>
            <li class="list-group-item p-3">
              <button
                type="button"
                class="btn btn-success"
                onClick={() => bookHandler()}
              >
                7
              </button>
            </li>
            <li class="list-group-item p-3">
              <button type="button" class="btn btn-secondary" disabled>
                8
              </button>
            </li>
            <li class="list-group-item p-3">
              <button
                type="button"
                class="btn btn-success"
                onClick={() => bookHandler()}
              >
                9
              </button>
            </li>
            <li class="list-group-item p-3">
              <button type="button" class="btn btn-secondary" disabled>
                10
              </button>
            </li>
            <li class="list-group-item p-3">
              <button
                type="button"
                class="btn btn-success"
                onClick={() => bookHandler()}
              >
                11
              </button>
            </li>
            <li class="list-group-item p-3">
              <button type="button" class="btn btn-secondary" disabled>
                12
              </button>
            </li>
            <li class="list-group-item p-3">
              <button
                type="button"
                class="btn btn-success"
                onClick={() => bookHandler()}
              >
                13
              </button>
            </li>
            <li class="list-group-item p-3">
              <button type="button" class="btn btn-secondary" disabled>
                14
              </button>
            </li>
            <li class="list-group-item p-3">
              <button
                type="button"
                class="btn btn-success"
                onClick={() => bookHandler()}
              >
                15
              </button>
            </li>
            <li class="list-group-item p-3">
              <button type="button" class="btn btn-secondary" disabled>
                16
              </button>
            </li>
            <li class="list-group-item p-3">
              <button
                type="button"
                class="btn btn-success"
                onClick={() => bookHandler()}
              >
                17
              </button>
            </li>
            <li class="list-group-item p-3">
              <button type="button" class="btn btn-secondary" disabled>
                18
              </button>
            </li>
            <li class="list-group-item p-3">
              <button
                type="button"
                class="btn btn-success"
                onClick={() => bookHandler()}
              >
                19
              </button>
            </li>
          </ul>
        </div>
      </div>
      <Footer />
      <AddBookingModal />
    </div>
  );
};

export default RoomPage;
