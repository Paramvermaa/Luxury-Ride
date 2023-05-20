import React from "react";
function PlanTripCard(props){
    return <div>
        <div className="PlanTripCardInner">
            <img src={props.image}></img>
            <h3>{props.name}</h3>
            <p>{props.description}</p>
        </div>
    </div>
}
export default PlanTripCard