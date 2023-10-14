import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'

const Navbar = ({isLogin}) => {
  const navigate = useNavigate();
  const logoutHandler = async () => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })
    
    swalWithBootstrapButtons.fire({
      title: 'Logout',
      text: 'Are you sure want to logout?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'No',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.clear();
        navigate('/');
        swalWithBootstrapButtons.fire(
          'Success!',
          'You have been logout.',
          'success'
        )
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Cancelled',
          'Your imaginary file is safe :)',
          'error'
        )
      }
    })
  }
  return (
    <>
      <nav class="navbar navbar-hotel navbar-expand-lg bg-body-tertiary ">
        <div class="container-fluid">
          <Link class="navbar-brand fw-bold" to="/">HotelLier</Link>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
            <ul class="navbar-nav ml-auto mb-2 mb-lg-0">
              {
                isLogin
                ? <>
                    <li class="nav-item">
                      <Link class="nav-link" to="/hotels">Hotels</Link>
                    </li>
                    <li class="nav-item">
                      <Link class="nav-link" to="/">My Booking</Link>
                    </li>
                  </>
                : <></>
              }
              <li class="nav-item">
                <Link class="nav-link" to="/about">About</Link>
              </li>
              {
                isLogin
                ? <button class="btn btn-outline-success" onClick={() => logoutHandler()}>Logout</button>
                : <Link class="btn btn-outline-success" to="/login">Login</Link>
              }
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
