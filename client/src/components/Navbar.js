import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav class="navbar navbar-hotel navbar-expand-lg bg-body-tertiary ">
        <div class="container-fluid">
          <Link class="navbar-brand" to="#">HotelLier</Link>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
            <ul class="navbar-nav ml-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link class="nav-link" to="/">Home</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/about">About</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/hotels">Hotels</Link>
              </li>
              <Link class="btn btn-outline-success" to="/login">Login</Link>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
