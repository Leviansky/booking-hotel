import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import { GrLocation } from "react-icons/gr";
import { getAllHotels } from "../axios/authAxios";

const HotelCard = () => {
  const [hotels, setHotels] = useState([])

  const getDatas = async () => {
    let result = await getAllHotels()
    console.log(result)
    setHotels(result)
  }

  useEffect(() => {
    getDatas()
  },[])
  return (
    <div className="row row-cols-1 row-cols-md-2 g-4 p-3">
      {
        hotels.map(hotel => {
          const {id, name, image, address, description} = hotel
          return <div className="card mb-3 p-3">
                    <div className="row g-0">
                      <div className="col-md-4">
                        <img
                          src={image}
                          className="card card-img img-thumbnail"
                          alt="..."
                        />
                      </div>
                      <div className="col-md-8">
                        <div className="card-body">
                          <h5 className="card-title fw-bold">{name}</h5>
                          <div className="row">
                            <span className="icon-location">
                              <GrLocation />
                              {address}
                            </span>
                          </div>
                          <p className="card-text">{description}</p>
                        </div>
                        <div className="card-footer">
                          <Link to={{ pathname: '/hotel-detail', search: `?id=${id}` }} className="btn btn-card btn-primary">
                            See
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
        })
      }

    </div>
  );
};

export default HotelCard;
