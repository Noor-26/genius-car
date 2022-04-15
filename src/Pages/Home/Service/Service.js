import React from 'react';
import './Service.css'
const Service = ({service}) => {
    const {name,price,img,description} = service
    return (
        <div className="service-container">
            <img src={img} alt="" />
          <h3>{name}</h3>
          <p>price : ${price}</p>
          <p className=""><small>{description}</small></p>
          <button className="btn btn-info mb-3 text-white">Book : {name}</button>
        </div>
    );
};

export default Service;