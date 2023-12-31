import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [name, setName] = useState("");

  const [avatar, setAvatar] = useState("");

  const [style, setStyle] = useState(
    "navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
  );

  const navigate = useNavigate();

  const checkIsLogin = () => {
    let result = localStorage.getItem("access_token");
    let name = localStorage.getItem("name");
    let avatar = localStorage.getItem("avatar");
    setName(name);
    setAvatar(avatar);
    if (result === null) {
      navigate("/");
    }
  };

  useEffect(() => {
    checkIsLogin();
  }, []);

  const changeStyle = () => {
    if (
      style == "navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
    ) {
      setStyle(
        "navbar-nav bg-gradient-primary sidebar sidebar-dark accordion toggled1"
      );
    } else {
      setStyle("navbar-nav bg-gradient-primary sidebar sidebar-dark accordion");
    }
  };

  // const logoutHandler = () => {
  //   localStorage.clear();
  //   navigate("/");
  // };

  return (
    <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
      <button
        id="sidebarToggleTop"
        className="btn btn-link d-md-none rounded-circle mr-3"
        onClick={changeStyle}
      >
        <i className="fa fa-bars"></i>
      </button>

      <ul className="navbar-nav ml-auto">

        <div className="topbar-divider d-none d-sm-block"></div>

        <li className="nav-item dropdown no-arrow">
          <Link
            className="nav-link dropdown-toggle"
            to="#"
            id="userDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <span className="mr-2 d-none d-lg-inline text-gray-600 small">
              {name}
            </span>
            <img className="img-profile rounded-circle" src={`${avatar}`} />
          </Link>
          <div
            className="dropdown-menu dropdown-menu-right shadow animated--grow-in"
            aria-labelledby="userDropdown"
          >
            <Link className="dropdown-item" to="#">
              <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
              Profile
            </Link>
            {/* <Link className="dropdown-item" to="#">
              <i className="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>
              Settings
            </Link>
            <Link className="dropdown-item" to="#">
              <i className="fas fa-list fa-sm fa-fw mr-2 text-gray-400"></i>
              Activity Log
            </Link> */}
            <div className="dropdown-divider"></div>
            <Link
              className="dropdown-item"
              to="#"
              data-toggle="modal"
              data-target="#logoutModal"
              // onClick={() => logoutHandler()}
            >
              <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
              Logout
            </Link>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
