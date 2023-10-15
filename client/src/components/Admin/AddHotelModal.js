import React, {useState}from "react";
import { addHotel } from "../../axios/authAxios";

const AddHotelModal = () => {
  const [name, setName] = useState('')
  const [image, setImage] = useState('')
  const [address, setAddress] = useState('')
  const [description, setDescription] = useState('')

  const addHotelHandler = async () => {
    let result = await addHotel({ name, image, address, description })
    setName('')
    setImage('')
    setAddress('')
    setDescription('')
    console.log(result)
  }

  return (
    <div
      className="modal fade"
      id="addHotelModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="addHotelModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="addHotelModalLabel">
              Add Hotel
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
                <input type="text" className="form-control" id="name" onChange={e => setName(e.target.value)}/>
              </div>
              <div className="form-group">
                <label for="image" className="col-form-label">
                  Image URL
                </label>
                <input type="text" className="form-control" id="image" onChange={e => setImage(e.target.value)}/>
              </div>
              <div className="form-group">
                <label for="address" className="col-form-label">
                  Address
                </label>
                <input type="text" className="form-control" id="address" onChange={e => setAddress(e.target.value)}/>
              </div>
              <div className="form-group">
                <label for="description" className="col-form-label">
                  Description
                </label>
                <textarea className="form-control" id="description"onChange={e => setDescription(e.target.value)}></textarea>
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
            <button 
              type="button"
              className="btn btn-primary" 
              onClick={() => addHotelHandler()}
              data-dismiss="modal"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddHotelModal;
