import React from 'react'

const UpdateCustomerModal = () => {
  return (
    <div
      className="modal fade"
      id="updateCustomerModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="updateCustomerModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="updateCustomerModalLabel">
              Update Customer
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
              <div className="form-group">
                <label for="name" className="col-form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  value="name"
                />
              </div>
              <div className="form-group">
                <label for="avatar" className="col-form-label">
                  Avatar
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="avatar"
                  value="avatar"
                />
              </div>
              <div className="form-group">
                <label for="address" className="col-form-label">
                  Address
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="address"
                  value="address"
                />
              </div>
              <div className="form-group">
                <label for="phone" className="col-form-label">
                  Phone
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="phone"
                  value="phone"
                />
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
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UpdateCustomerModal