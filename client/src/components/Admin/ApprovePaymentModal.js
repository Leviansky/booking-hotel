import React, {useEffect} from 'react'
import { getAllBookings, approvePayment } from '../../axios/authAxios'

const ApprovePaymentModal = ({booking}) => {
  const approveHandler = async() => {
    let result = await approvePayment(booking.id)
    console.log(result)
    await getAllBookings()
  }

  useEffect(() => {

  }, [booking])
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
              data-dismiss="modal"
              onClick={() => approveHandler()}
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