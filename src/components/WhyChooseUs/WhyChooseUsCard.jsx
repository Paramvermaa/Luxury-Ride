import React from 'react';
function WhyChooseUsCard(props){
    return <div className='WhyChooseUsCard'>
        <div><img src={props.img} alt={props.alt}></img></div>
        <div className='WhyChooseUsCardText'>
            <h3>{props.h3}</h3>
            <p>{props.p}</p>
        </div>
    </div>;
}
export default WhyChooseUsCard