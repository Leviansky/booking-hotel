import React from 'react'
import {deleteUser} from '../../axios/authAxios'

const DeleteModal = ({customer}) => {
  const deleteHandler = async () => {
    let result = await deleteUser(customer.id)
  }

  return (
    <div
      className="modal fade"
      id="deleteCustomerModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="deleteCustomerModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="deleteCustomerModalLabel">
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
          <div className="modal-body">Are you sure want to delete this customer?</div>
          <div className="modal-footer">
            <button
              className="btn btn-secondary"
              type="button"
              data-dismiss="modal"
            >
              Cancel
            </button>
            <button
              className="btn btn-danger"
              type="button"
              data-dismiss="modal"
              onClick={() => deleteHandler()}
            >
              Yes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DeleteModal