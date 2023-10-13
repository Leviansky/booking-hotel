import React, { useEffect, useState } from "react";
import "./Admin.css";
// import { Link, useNavigate } from "react-router-dom";
import { AdminFooter, AdminNavbar, LogoutModal, SideBar } from "../../components";

const HotelAdmin = () => {
  return (
    <div className="admin">
      <div id="wrapper">
        <SideBar />

        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <AdminNavbar />

            <div>INI HALAMAN HOTEL</div>

            
          </div>

          <AdminFooter />

        </div>
      </div>

      <LogoutModal />

    </div>
  )
}

export default HotelAdmin