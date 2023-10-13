import React from 'react'

const AddHotelModal = () => {
  return (
    <div
      className="modal fade"
      id="logoutModall"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Logout
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
          <div className="modal-body">Are you sure want to logout?</div>
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
            //   onClick={() => logoutHandler()}
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
    // <div className="modal fade" id="addHotelModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    //     <div className="modal-dialog" role="document">
    //         <div className="modal-content">
    //         <div className="modal-header">
    //             <h5 className="modal-title" id="exampleModalLabel">Add Hotel</h5>
    //             <button type="button" className="close" data-dismiss="modal" aria-label="Close">
    //             <span aria-hidden="true">&times;</span>
    //             </button>
    //         </div>
    //         <div className="modal-body">
    //             <form>
    //             <div className="form-group">
    //                 <label for="name" className="col-form-label">Name</label>
    //                 <input type="text" className="form-control" id="name"/>
    //             </div>
    //             <div className="form-group">
    //                 <label for="image" className="col-form-label">Image URL</label>
    //                 <input type="text" className="form-control" id="image"/>
    //             </div>
    //             <div className="form-group">
    //                 <label for="address" className="col-form-label">Address</label>
    //                 <input type="text" className="form-control" id="address"/>
    //             </div>
    //             <div className="form-group">
    //                 <label for="description" className="col-form-label">Description</label>
    //                 <textarea className="form-control" id="description"></textarea>
    //             </div>
    //             </form>
    //         </div>
    //         <div className="modal-footer">
    //             <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
    //             <button type="button" className="btn btn-primary">Save</button>
    //         </div>
    //         </div>
    //     </div>
    // </div>
  );
}

export default AddHotelModal