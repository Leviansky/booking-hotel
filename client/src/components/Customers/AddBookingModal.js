import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const AddBookingModal = () => {
  const [selectesDate, setSelectedDate] = useState("");
  return (
    <div
      className="modal fade"
      id="addBookingModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="addBookingModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="addBookingModalLabel">
              Book Room
            </h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <form>
              <div className="form-group row">
                <label for="roomNumbers" className="col-sm-3 col-form-label">
                  Room Number
                </label>
                <div class="col-sm-9">
                  <input
                    type="text"
                    readonly
                    class="form-control-plaintext"
                    id="name"
                    value=": (Room Number)"
                  />
                </div>
              </div>
              <div className="form-group row">
                <label for="price" className="col-sm-3 col-form-label">
                  Price
                </label>
                <div class="col-sm-9">
                  <input
                    type="text"
                    readonly
                    class="form-control-plaintext"
                    id="name"
                    value=": Rp. 1000000"
                  />
                </div>
              </div>
              <div className="form-group row">
                <label for="dataCheckin" className="col-sm-3 col-form-label">
                  Check-in
                </label>
                <div class="col-sm-9">
                  :{" "}
                  <DatePicker
                    placeholderText="dd-mm-yyyy"
                    selected={selectesDate}
                    onChange={(date) => setSelectedDate(date)}
                    dateFormat="dd-MM-yyyy"
                    showYearDropdown
                  />
                </div>
              </div>
              <div className="form-group row">
                <label for="dataCheckout" className="col-sm-3 col-form-label">
                  Check-out
                </label>
                <div class="col-sm-9">
                  :{" "}
                  <DatePicker
                    placeholderText="dd-mm-yyyy"
                    selected={selectesDate}
                    onChange={(date) => setSelectedDate(date)}
                    dateFormat="dd-MM-yyyy"
                    showYearDropdown
                  />
                </div>
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-dismiss="modal"
            >
              Cancel
            </button>
            <button type="button" className="btn btn-primary">
              Book
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddBookingModal;
