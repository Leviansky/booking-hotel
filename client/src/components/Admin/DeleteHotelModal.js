import React from 'react'
import {deleteHotel} from '../../axios/authAxios'

const DeleteHotelModal = ({hotel}) => {
  const deleteHandler = async () => {
    let result = await deleteHotel(hotel.id)
  }

  return (
    <div
      className="modal fade"
      id="DeleteHotelModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="DeleteHotelModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="DeleteHotelModalLabel">
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
          <div className="modal-body">Are you sure want to delete this hotel?</div>
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

export default DeleteHotelModal