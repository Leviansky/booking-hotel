import React from "react";

const UpdateRoomModal = () => {
  return (
    <div
      className="modal fade"
      id="updateRoomModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="updateRoomModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="updateRoomModalLabel">
              Update Room
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
                <label for="price" className="col-form-label">
                  Room Price
                </label>
                <input type="number" className="form-control" id="price" value="1" />
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
};

export default UpdateRoomModal;
