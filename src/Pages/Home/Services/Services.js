import React, { useEffect, useState } from 'react';
import Experts from '../Experts/Experts';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {
    const [services, setservices] = useState([])
    useEffect(() => {
      fetch('http://localhost:5000/service')
      .then(res=>res.json())
      .then(data => setservices(data))
    
    }, [])
    
    return (
        <div>
            <h1 className="text-primary my-4">Services  </h1>
            <div className="container services-container "  id="service">

            {
                services.map(service=><Service key={services._id} service={service}/>)
            }
            </div>
           
        </div>
    );
};

export default Services;