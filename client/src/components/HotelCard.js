import React from "react";
import { Link } from "react-router-dom";
import { GrLocation } from "react-icons/gr";

const HotelCard = () => {
  return (
    <div className="row row-cols-1 row-cols-md-2 g-4 p-3">
      <div className="card mb-3 p-3">
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src="https://mdbcdn.b-cdn.net/wp-content/uploads/2020/06/vertical.webp"
              className="card card-img img-thumbnail"
              alt="..."
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title fw-bold">Hotel Name</h5>
              <div className="row">
                <span className="icon-location">
                  <GrLocation />
                  Address, location
                </span>
              </div>
              <p className="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
            <div className="card-footer">
              <Link to="/hotel-detail" className="btn btn-card btn-primary">
                See
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="card mb-3 p-3">
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src="https://mdbcdn.b-cdn.net/wp-content/uploads/2020/06/vertical.webp"
              className="card card-img img-thumbnail"
              alt="..."
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title fw-bold">Hotel Name</h5>
              <div className="row">
                <span className="icon-location">
                  <GrLocation />
                  Address, location
                </span>
              </div>
              <p className="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
            <div className="card-footer">
              <Link to="/hotel-detail" className="btn btn-card btn-primary">
                See
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelCard;
