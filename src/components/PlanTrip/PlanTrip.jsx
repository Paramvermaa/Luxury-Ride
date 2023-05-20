import React from "react";
import PlanTripCard from "./PlanTripCard";
import icon1 from "/Users/bossv/carrental-app/src/Images/icon1.png";
import icon2 from "/Users/bossv/carrental-app/src/Images/icon2.png";
import icon3 from "/Users/bossv/carrental-app/src/Images/icon3.png";
function PlanTrip()
{
    return <div className="PlanTripOuter">
        <h4>Plan Your Trip Now</h4>
        <h2>Quick & Easy Car Rental</h2>
        <div className="PlanTripInner">
        <PlanTripCard image={icon1} name="Select Car" description="We offers a big range of vehicles for all your driving needs. We have the perfect car to meet your needs"/>
        <PlanTripCard image={icon2} name="Contact Operator" description="Our knowledgeable and friendly operators are always ready to help with any questions or concerns"/>
        <PlanTripCard image={icon3} name="Let's Drive" description="Whether you're hitting the open road, we've got you covered with our wide range of cars"/>
        </div>
    </div>
}
export default PlanTrip