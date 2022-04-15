import React from 'react';
import './Expert.css'
const Expert = ({expert}) => {
    const {img,name} = expert
    return (
        <div> 
            <img src={img} alt="" className="expert-img"/>
            <h4>{name}</h4>
        </div>
    );
};

export default Expert;