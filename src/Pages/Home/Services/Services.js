import React, { useEffect, useState } from 'react';
import Experts from '../Experts/Experts';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {
    const [services, setservices] = useState([])
    useEffect(() => {
      fetch('services.json')
      .then(res=>res.json())
      .then(data => setservices(data))
    
    }, [])
    
    return (
        <div>
            <h1 className="text-primary">Services  </h1>
            <div className="container services-container ">

            {
                services.map(service=><Service key={services.id} service={service}/>)
            }
            </div>
            <Experts/>
        </div>
    );
};

export default Services;