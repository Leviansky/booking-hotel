import React, { useEffect, useState } from "react";
import "./Admin.css";
import { Link, useNavigate } from "react-router-dom";

const Customers = () => {
  const [name, setName] = useState('')
  const [avatar, setAvatar] = useState('')
  const [style, setStyle] = useState(
    "navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
  );
  const year = new Date().getFullYear();
  const navigate = useNavigate();

  const logoutHandler = () => {
    localStorage.clear()
    navigate('/')
  }

  const checkIsLogin = () => {
    let result = localStorage.getItem("access_token")
    let name = localStorage.getItem("name")
    let avatar = localStorage.getItem("avatar")
    setName(name)
    setAvatar(avatar)
    if(result === null) {navigate('/')}
  }

  useEffect(() => {
    checkIsLogin()
  }, [])
  
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
  const changeStyle1 = () => {
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
  return (
    <div className="admin">
      <div id="wrapper">
        <ul className={style} id="accordionSidebar">
          <Link
            className="sidebar-brand d-flex align-items-center justify-content-center"
            to="#"
          >
            <div className="sidebar-brand-text mx-3">
              Admin HOTEL
            </div>
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
            <Link
              className="nav-link"
              to='/admin/customer'
            >
              <i className="fas fa-fw fa-user"></i>
              <span>Customers</span>
            </Link>
          </li>

          <li className="nav-item">
            <Link
              className="nav-link"
              to='/admin/hotel'
            >
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

        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
              <button
                id="sidebarToggleTop"
                className="btn btn-link d-md-none rounded-circle mr-3"
                onClick={changeStyle1}
              >
                <i className="fa fa-bars"></i>
              </button>

              <form className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control bg-light border-0 small"
                    placeholder="Search for..."
                    aria-label="Search"
                    aria-describedby="basic-addon2"
                  />
                  <div className="input-group-append">
                    <button className="btn btn-primary" type="button">
                      <i className="fas fa-search fa-sm"></i>
                    </button>
                  </div>
                </div>
              </form>

              <ul className="navbar-nav ml-auto">
                <li className="nav-item dropdown no-arrow d-sm-none">
                  <Link
                    className="nav-link dropdown-toggle"
                    to="#"
                    id="searchDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <i className="fas fa-search fa-fw"></i>
                  </Link>
                  <div
                    className="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in"
                    aria-labelledby="searchDropdown"
                  >
                    <form className="form-inline mr-auto w-100 navbar-search">
                      <div className="input-group">
                        <input
                          type="text"
                          className="form-control bg-light border-0 small"
                          placeholder="Search for..."
                          aria-label="Search"
                          aria-describedby="basic-addon2"
                        />
                        <div className="input-group-append">
                          <button className="btn btn-primary" type="button">
                            <i className="fas fa-search fa-sm"></i>
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </li>

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
                    <img
                      className="img-profile rounded-circle"
                      src={`${avatar}`}
                    />
                  </Link>
                  <div
                    className="dropdown-menu dropdown-menu-right shadow animated--grow-in"
                    aria-labelledby="userDropdown"
                  >
                    <Link className="dropdown-item" to="#">
                      <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                      Profile
                    </Link>
                    <Link className="dropdown-item" to="#">
                      <i className="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>
                      Settings
                    </Link>
                    <Link className="dropdown-item" to="#">
                      <i className="fas fa-list fa-sm fa-fw mr-2 text-gray-400"></i>
                      Activity Log
                    </Link>
                    <div className="dropdown-divider"></div>
                    <Link
                      className="dropdown-item"
                      to="#"
                      data-toggle="modal"
                      data-target="#logoutModal"
                      onClick={() => logoutHandler()}
                    >
                      <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                      Logout
                    </Link>
                  </div>
                </li>
              </ul>
            </nav>

            <div>INI HALAMAN CUSTOMERS</div>

            
          </div>

          <footer className="sticky-footer bg-white">
            <div className="container my-auto">
              <div className="copyright text-center my-auto">
                <span>Copyright &copy; {year}</span>
              </div>
            </div>
          </footer>
        </div>
      </div>

      <Link className="scroll-to-top rounded" to="#page-top">
        <i className="fas fa-angle-up"></i>
      </Link>

      <div
        className="modal fade"
        id="logoutModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Ready to Leave?
              </h5>
              <button
                className="close"
                type="button"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              Select "Logout" below if you are ready to end your current
              session.
            </div>
            <div className="modal-footer">
              <button
                className="btn btn-secondary"
                type="button"
                data-dismiss="modal"
              >
                Cancel
              </button>
              <button
                className="btn btn-primary"
                type="button"
                onClick={() => logoutHandler()}
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Customers