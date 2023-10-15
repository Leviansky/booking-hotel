import React, {useState} from 'react'
import { addRoom } from '../../axios/authAxios'

const AddRoomModal = ({hotel}) => {
  const [price, setPrice] = useState(0)

  const addRoomHandler = async() => {
    let result = await addRoom(hotel.id, {
      price: price
    })
    console.log(hotel)
  }

  return (
    <div
      className="modal fade"
      id="addRoomModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="addRoomModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="addRoomModalLabel">
              Add Room
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
                <input type="number" className="form-control" id="price" onChange={e => setPrice(e.target.value)}/>
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
              onClick={() => addRoomHandler()} 
              data-dismiss="modal"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddRoomModal