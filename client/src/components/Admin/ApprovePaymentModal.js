import React from 'react'

const ApprovePaymentModal = () => {
  return (
    <div
      className="modal fade"
      id="approvePaymentModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="approvePaymentModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="approvePaymentModalLabel">
              Approve Payment
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
          <div className="modal-body">Are you sure want to approve payment for this booking?</div>
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
            >
              Yes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ApprovePaymentModal