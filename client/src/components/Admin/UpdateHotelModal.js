import React, {useEffect, useState} from 'react'
import { getAllHotels, editHotel } from '../../axios/authAxios'

const UpdateHotelModal = ({hotel}) => {
  const [name, setName] = useState('')
  const [image, setImage] = useState('')
  const [address, setAddress] = useState('')
  const [description, setDescription] = useState('')

  const updateHandler = async() => {
    console.log(hotel.id)
    let result = await editHotel(
      hotel.id,
      {
        "name": name,
        "image": image,
        "address": address,
        "description": description
      }
    )
    console.log(result)
    await getAllHotels()
  }

  useEffect(() => {
    console.log(hotel)
    if (hotel) {
      setName(hotel.name || '');
      setImage(hotel.image || '');
      setAddress(hotel.address || '');
      setDescription(hotel.description || '');
    }
  }, [hotel]);
  return (
    <div
      className="modal fade"
      id="updateHotelModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="updateHotelModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="updateHotelModalLabel">
              Update Hotel
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
                <input 
                  type="text" 
                  className="form-control" 
                  id="name" 
                  value={name} 
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label for="image" className="col-form-label">
                  Image URL
                </label>
                <input 
                  type="text" 
                  className="form-control" 
                  id="image" 
                  value={image} 
                  onChange={(e) => setImage(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label for="address" className="col-form-label">
                  Address
                </label>
                <input 
                  type="text" 
                  className="form-control" 
                  id="address" 
                  value={address} 
                  onChange={(e) => setAddress(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label for="description" className="col-form-label">
                  Description
                </label>
                <textarea 
                  className="form-control" 
                  id="description" 
                  value={description} 
                  onChange={(e) => setDescription(e.target.value)}
                />
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
              onClick={() => updateHandler()}
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

export default UpdateHotelModal