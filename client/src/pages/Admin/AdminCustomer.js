import React, { useEffect, useState } from "react";
import "./Admin.css";
// import { Link, useNavigate } from "react-router-dom";
import {
  AdminFooter,
  AdminNavbar,
  DeleteCustomerModal,
  LogoutModal,
  SideBar,
  UpdateCustomerModal,
} from "../../components";
import { getAllUsers } from "../../axios/authAxios";

const Customers = () => {
  const [customer, setCustomers] = useState([])
  const [selectedCustomer, setSelectedCustomer] = useState({})

  const getData = async () => {
    let customers = await getAllUsers()
    setCustomers(customers)
  }

  const eventHandler = (customer) => {
    setSelectedCustomer(customer)
  }

  useEffect(() => {
    getData()
  }, [customer])

  return (
    <div className="admin">
      <div id="wrapper">
        <SideBar inActive={'customer'}/>

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
                            const {name, username, email, address, phone, role} = customer
                            return role === "user"
                            ? (
                                <tr>
                                  <td>{index + 1}</td>
                                  <td>{name}</td>
                                  <td>{username}</td>
                                  <td>{email}</td>
                                  <td>{address ? address : "-"}</td>
                                  <td>{phone ? phone : "-"}</td>
                                  <td>
                                    <button
                                      className="btn btn-warning"
                                      data-toggle="modal"
                                      data-target="#updateCustomerModal"
                                      onClick={() => eventHandler(customer)}
                                    >
                                      <i className="fas fa-edit"></i>
                                    </button>
                                    <button
                                      className="btn btn-danger"
                                      data-toggle="modal"
                                      data-target="#deleteCustomerModal"
                                      onClick={() => eventHandler(customer)}
                                    >
                                      <i className="fa fa-trash"></i>
                                    </button>
                                  </td>
                                </tr>
                              )
                            : <></>
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

      <UpdateCustomerModal customer={selectedCustomer}/>
      <DeleteCustomerModal customer={selectedCustomer}/>
      <LogoutModal />
    </div>
  );
};

export default Customers;
