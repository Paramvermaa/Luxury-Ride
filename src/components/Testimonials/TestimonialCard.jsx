import React from "react";
function TestimonialCard(props){
    return <div className="testimonialCarInner">
        <p>"{props.p}"</p>
        <div>
            <div className="testimonialCarInfo">
                <img src={props.img}/>
                <div>
                <h2>{props.name}</h2>
                <p>{props.address}</p>
                <i class="fa-solid fa-quote-right"></i>
                </div>
            </div>
        </div>
    </div>
}
export default TestimonialCard