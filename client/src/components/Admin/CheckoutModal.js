import React from 'react'

const CheckoutModal = () => {
  return (
    <div
      className="modal fade"
      id="checkoutModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="checkoutModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="checkoutModalLabel">
              Delete
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
          <div className="modal-body">Are you sure want to delete this?</div>
          <div className="modal-footer">
            <button
              className="btn btn-secondary"
              type="button"
              data-dismiss="modal"
            >
              Cancel
            </button>
            <button className="btn btn-danger" type="button">
              Yes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckoutModal