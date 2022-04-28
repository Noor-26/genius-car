import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';


const ServicesDetail = () => {
    const {serviceId}= useParams()
    const [service, setService] = useState([])
    useEffect(() => {
        const url = `http://localhost:5000/service/${serviceId}`
      fetch(url)
      .then(res => res.json())
      .then(data => setService(data))
    
    
    }, [])
    
    return (
        <div>
            <h2>
                Welcome to the service details of : {service.name}
 
            </h2>
                <Link to={`/checkout/${serviceId}`}><button className="btn btn-success">Proceed checkout</button></Link>
            
        </div>
    );
};

export default ServicesDetail;