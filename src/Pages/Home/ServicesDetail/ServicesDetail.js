import React from 'react';
import { Link, useParams } from 'react-router-dom';


const ServicesDetail = () => {
    const {serviceId}= useParams()
    return (
        <div>
            <h2>
                welcome to the service details of : {serviceId}
 
            </h2>
                <Link to="/checkout"><button>Proceed checkout</button></Link>
            
        </div>
    );
};

export default ServicesDetail;