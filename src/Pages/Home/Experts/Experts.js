import React from 'react';
import Expert from '../Expert/Expert';
import expert1 from '../images/experts/expert-1.jpg'
import expert2 from '../images/experts/expert-2.jpg'
import expert3 from '../images/experts/expert-3.jpg'
import expert4 from '../images/experts/expert-4.jpg'
import expert5 from '../images/experts/expert-5.jpg'
import expert6 from '../images/experts/expert-6.png'

const experts=[
    {id:1,img: expert1,name:"will Smith"},
    {id:2,img: expert2,name:"crish rock"},
    {id:3,img: expert3,name:"dwayne rock"},
    {id:4,img: expert4,name:"albert"},
    {id:5,img: expert5,name:"Jhonshon"},
    {id:6,img: expert6,name:"edwen"}
]
const Experts = () => {
    return (
        <div>
            <h1>Our experts</h1>
           <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3  container w-100 mx-auto my-4 g-4">
               {
               experts.map(expert => <Expert key={expert.id} expert={expert}/>)
               }
           </div>
        </div>
    );
};

export default Experts;