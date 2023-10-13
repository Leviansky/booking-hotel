import React, { useEffect, useState } from "react";
import "./Admin.css";
// import { Link, useNavigate } from "react-router-dom";
import {
  AdminFooter,
  AdminNavbar,
  LogoutModal,
  SideBar,
} from "../../components";

const AdminPage = () => {
  return (
    <div className="admin">
      <div id="wrapper">
        <SideBar />

        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <AdminNavbar />

            <div class="container-fluid">
              <div class="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 class="h3 mb-0 text-gray-800">Dashboard</h1>
              </div>

              <div class="row">
                <div class="col-xl-3 col-md-6 mb-4">
                  <div class="card border-left-primary shadow h-100 p-3">
                    <div class="card-body">
                      <div class="row no-gutters align-items-center">
                        <div class="col mr-2">
                          <div class="text-xs font-weight-bold text-primary text-uppercase mb-1">
                            Total Hotel
                          </div>
                          <div class="h5 mb-0 font-weight-bold text-gray-800">
                            10
                          </div>
                        </div>
                        <div class="col-auto">
                          <i class="fas fa-building fa-2x text-gray-300"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-xl-3 col-md-6 mb-4">
                  <div class="card border-left-success shadow h-100 p-3">
                    <div class="card-body">
                      <div class="row no-gutters align-items-center">
                        <div class="col mr-2">
                          <div class="text-xs font-weight-bold text-success text-uppercase mb-1">
                            Total Room
                          </div>
                          <div class="h5 mb-0 font-weight-bold text-gray-800">
                            10
                          </div>
                        </div>
                        <div class="col-auto">
                          <i class="fas fa-bed fa-2x text-gray-300"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-xl-3 col-md-6 mb-4">
                  <div class="card border-left-info shadow h-100 p-3">
                    <div class="card-body">
                      <div class="row no-gutters align-items-center">
                        <div class="col mr-2">
                          <div class="text-xs font-weight-bold text-info text-uppercase mb-1">
                            Total Customer
                          </div>
                          <div class="h5 mb-0 font-weight-bold text-gray-800">
                            10
                          </div>
                          <div class="row no-gutters align-items-center"></div>
                        </div>
                        <div class="col-auto">
                          <i class="fas fa-user fa-2x text-gray-300"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-xl-3 col-md-6 mb-4">
                  <div class="card border-left-warning shadow h-100 p-3">
                    <div class="card-body">
                      <div class="row no-gutters align-items-center">
                        <div class="col mr-2">
                          <div class="text-xs font-weight-bold text-warning text-uppercase mb-1">
                            Total Booking
                          </div>
                          <div class="h5 mb-0 font-weight-bold text-gray-800">
                            10
                          </div>
                        </div>
                        <div class="col-auto">
                          <i class="fas fa-door-open fa-2x text-gray-300"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <AdminFooter />

        </div>
      </div>

      <LogoutModal />
    </div>
  );
};

export default AdminPage;
