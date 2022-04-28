import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';

const Checkout = () => {
    const {serviceId} = useParams()
    const [service, setService] = useState([])
    const [user] = useAuthState(auth)
    console.log(user) 
    useEffect(() => {
        const url = `http://localhost:5000/service/${serviceId}`
      fetch(url)
      .then(res => res.json())
      .then(data => setService(data))
    
    }, [])
    return (
        <div>
            <h2>Your Order : {service.name} </h2>
            <form action="">
                <input type="text" name="name" value={user.displayName} placeholder="Name" />
                <input type="email" name="email"  placeholder="email"  value={user.email}  />
                <input type="text" name="serviceName" placeholder="service name" />
                <input type="text" name="address" placeholder="address"  required/>
                <input type="number" name="phone" placeholder="phone" required />
                <input type="submit" value="Confirm order" />
            </form>
        </div>
    );
};

export default Checkout;