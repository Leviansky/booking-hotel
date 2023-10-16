import React from "react";

const DetailRoomModal = () => {
  return (
    <div>
      <div
        class="modal fade"
        id="exampleModalToggle"
        aria-hidden="true"
        aria-labelledby="exampleModalToggleLabel"
        tabindex="-1"
      >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalToggleLabel">
                Modal 1
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              Show a second modal and hide this one with the button below.
            </div>
            <div class="modal-footer">
              <button
                class="btn btn-primary"
                data-bs-target="#exampleModalToggle2"
                data-bs-toggle="modal"
              >
                Open second modal
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        class="modal fade"
        id="exampleModalToggle2"
        aria-hidden="true"
        aria-labelledby="exampleModalToggleLabel2"
        tabindex="-1"
      >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalToggleLabel2">
                Modal 2
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              Hide this modal and show the first with the button below.
            </div>
            <div class="modal-footer">
              <button
                class="btn btn-primary"
                data-bs-target="#exampleModalToggle"
                data-bs-toggle="modal"
              >
                Back to first
              </button>
            </div>
          </div>
        </div>
      </div>
      <button
        class="btn btn-primary"
        data-bs-target="#exampleModalToggle"
        data-bs-toggle="modal"
      >
        Open first modal
      </button>
    </div>
    // <div
    //   className="modal fade"
    //   id="detailRoomModal"
    //   tabindex="-1"
    //   role="dialog"
    //   aria-labelledby="detailRoomModalLabel"
    //   aria-hidden="true"
    // >
    //   <div className="modal-dialog" role="document">
    //     <div className="modal-content">
    //       <div className="modal-header">
    //         <h5 className="modal-title" id="detailRoomModalLabel">
    //           Detail Room
    //         </h5>
    //         <button
    //           className="close"
    //           type="button"
    //           data-dismiss="modal"
    //           aria-label="Close"
    //         >
    //           <span aria-hidden="true">×</span>
    //         </button>
    //       </div>
    //       <div className="modal-body">
    //         <form>
    //           <div className="form-group row">
    //             <label for="roomNumbers" className="col-sm-3 col-form-label">
    //               Room Number
    //             </label>
    //             <div class="col-sm-9">
    //               <input
    //                 type="text"
    //                 readonly
    //                 class="form-control-plaintext"
    //                 id="name"
    //                 value=": (Room Number)"
    //               />
    //             </div>
    //           </div>
    //           <div className="form-group row">
    //             <label for="price" className="col-sm-3 col-form-label">
    //               Price
    //             </label>
    //             <div class="col-sm-9">
    //               <input
    //                 type="text"
    //                 readonly
    //                 class="form-control-plaintext"
    //                 id="name"
    //                 value=": Rp. 1000000"
    //               />
    //             </div>
    //           </div>
    //           <div className="form-group row">
    //             <label for="status" className="col-sm-3 col-form-label">
    //               Status
    //             </label>
    //             <div class="col-sm-9">
    //               <input
    //                 type="text"
    //                 readonly
    //                 class="form-control-plaintext"
    //                 id="name"
    //                 value=": Reserved"
    //               />
    //             </div>
    //           </div>
    //         </form>
    //       </div>
    //       <div className="modal-footer">
    //         <button
    //           className="btn btn-secondary"
    //           data-toggle="modal"
    //           data-target="#updateRoomModal"
    //         >
    //           Update
    //         </button>
    //         {/* <button
    //           className="btn btn-secondary"
    //           type="button"
    //           data-dismiss="modal"
    //         >
    //           Cancel
    //         </button>
    //         <button className="btn btn-primary" type="button">
    //           Logout
    //         </button> */}
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default DetailRoomModal;
