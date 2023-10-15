import React, { useEffect, useState } from "react";
import { Navbar, Carousels, Footer } from "../../components";

const BookingPage = () => {
  const [name, setName] = useState("");
  useEffect(() => {
    setName(localStorage.getItem("name"));
  });
  return (
    <>
      <Navbar isLogin={true} />
      <div className="container">
        <div className="row p-3">
          <hr />
          <h3 className="text-center">Bookings</h3>
          <hr />
          <div class="card mb-3">
            <div class="card-body">
              <div className="row">
                <div className="col">
                  <h5 class="card-title">Hotel Name</h5>
                  <div className="col">
                    <span>
                      <i class="fas fa-door-open me-2"></i>1
                    </span>
                    <span>
                      <i class="fas fa-users ml-4 me-2"></i>2 persons
                    </span>
                    <span>
                      <i class="fas fa-sign-in-alt ml-4 me-2"></i>
                      23-03-2023
                    </span>
                    <span>
                      <i class="fas fa-sign-out-alt ml-4 me-2"></i>
                      25-03-2023
                    </span>
                    <p class="card-text text-body-secondary mt-2">Total Price: Rp. 100000</p>
                  </div>
                </div>
                <div className="col text-end">
                  <button className="btn btn-warning" disabled>
                    Unpaid
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="card mb-3">
            <div class="card-body">
              <div className="row">
                <div className="col">
                  <h5 class="card-title">Hotel Name</h5>
                  <div className="col">
                    <span>
                      <i class="fas fa-door-open me-2"></i>1
                    </span>
                    <span>
                      <i class="fas fa-users ml-4 me-2"></i>2 persons
                    </span>
                    <span>
                      <i class="fas fa-sign-in-alt ml-4 me-2"></i>
                      23-03-2023
                    </span>
                    <span>
                      <i class="fas fa-sign-out-alt ml-4 me-2"></i>
                      25-03-2023
                    </span>
                    <p class="card-text text-body-secondary mt-2">Total Price: Rp. 100000</p>
                  </div>
                </div>
                <div className="col text-end">
                  <button
                    className="btn btn-success"
                    disabled
                  >
                    Paid
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BookingPage;
