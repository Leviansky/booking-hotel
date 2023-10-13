import React, { useEffect, useState } from "react";
import "./Admin.css";
// import { Link, useNavigate } from "react-router-dom";
import {
  AdminFooter,
  AdminNavbar,
  LogoutModal,
  SideBar,
} from "../../components";
import { getAllUsers } from "../../axios/authAxios";

const Customers = () => {
  const [customer, setCustomers] = useState([])

  const getData = async () => {
    let access_token = localStorage.getItem("access_token")
    let customers = await getAllUsers(access_token)
    setCustomers(customers)
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

            <div class="container-fluid">
              <h1 class="h3 mb-2 text-gray-800 text-center">Customers Controller</h1>

              <div class="card shadow mb-4">
                <div className="card-header p-3">
                  <div className="row">
                    <div className="col">
                      <h4 className="m-0 font-weight-bold text-primary">
                        Data Customer
                      </h4>
                    </div>
                  </div>
                </div>
                <div class="card-body">
                  <div class="table-responsive">
                    <table
                      class="table table-bordered"
                      id="dataTable"
                      width="100%"
                      cellspacing="0"
                    >
                      <thead>
                        <tr>
                          <th>No</th>
                          <th>Name</th>
                          <th>Username</th>
                          <th>Email</th>
                          <th>Address</th>
                          <th>Phone</th>
                          <th>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {
                          customer.map((customer, index) => {
                            const {name, username, email, address, phone} = customer
                            return <tr>
                            <td>{index+1}</td>
                            <td>{name}</td>
                            <td>{username}</td>
                            <td>{email}</td>
                            <td>{address}</td>
                            <td>{phone}</td>
                            <td>
                              <button className="btn btn-warning">Update</button>
                              <button className="btn btn-danger">Delete</button>
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

      <LogoutModal />
    </div>
  );
};

export default Customers;
