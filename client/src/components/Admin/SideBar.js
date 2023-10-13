import React, { useState } from "react";
import { Link } from "react-router-dom";

const SideBar = () => {
  const [style, setStyle] = useState(
    "navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
  );

  const changeStyle = () => {
    if (
      style == "navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
    ) {
      setStyle(
        "navbar-nav bg-gradient-primary sidebar sidebar-dark accordion toggled"
      );
    } else {
      setStyle("navbar-nav bg-gradient-primary sidebar sidebar-dark accordion");
    }
  };

  return (
    <ul className={style} id="accordionSidebar">
      <Link
        className="sidebar-brand d-flex align-items-center justify-content-center"
        to="#"
      >
        <div className="sidebar-brand-text mx-3">Admin Hotel</div>
      </Link>

      <hr className="sidebar-divider my-0" />

      <li className="nav-item active">
        <Link className="nav-link" to="/admin">
          <i className="fas fa-fw fa-tachometer-alt"></i>
          <span>Dashboard</span>
        </Link>
      </li>

      <hr className="sidebar-divider" />

      <div className="sidebar-heading">Features</div>

      <li className="nav-item">
        <Link className="nav-link" to="/admin/customer">
          <i className="fas fa-fw fa-user"></i>
          <span>Customers</span>
        </Link>
      </li>

      <li className="nav-item">
        <Link className="nav-link" to="/admin/hotel">
          <i className="fas fa-fw fa-building"></i>
          <span>Hotels</span>
        </Link>
      </li>

      <hr className="sidebar-divider" />

      <hr className="sidebar-divider d-none d-md-block" />

      <div className="text-center d-none d-md-inline">
        <button
          className="rounded-circle border-0"
          id="sidebarToggle"
          onClick={changeStyle}
        ></button>
      </div>
    </ul>
  );
};

export default SideBar;
