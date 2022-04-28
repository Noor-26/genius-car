import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css'
const Service = ({service}) => {
    const {_id,name,price,img,description} = service
    const navigate = useNavigate()

    const navigateToServiceDetails = (id) =>{
        navigate(`/service/${id}`)
    }
    return (
        <div className="service-container">
            <img src={img} alt="" className="img-fluid" />
          <h3>{name}</h3>
          <p>price : ${price}</p>
          <p className=""><small>{description}</small></p>
          <button className="btn btn-info mb-3 text-white" onClick={() => navigateToServiceDetails(_id)}>Book : {name}</button>
        </div>
    );
};

export default Service;