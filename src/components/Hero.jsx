import React from "react";
import {Link} from "react-router-dom";
import bgShape from "../src/Images/hero-bg.png";
import heroImage from "../src/Images/144225-ferrari-red-superfast-png-image-high-quality.png";
import tick from "../src/Images/compliance.png";
function Hero()
{
    return <>
    <section className="heroSection" id="heroSection">
    <img className="bgShape" src={bgShape} alt="bg-shape" />
    <div className="heroContent">
        <div className="heroContentText">
        <h4>Plan your trip now</h4>
        <h1>Save <span>big</span> with your Car Rental</h1>
        <p>Rent the car of your dreams. Unbeatable prices, unlimited miles, flexible pick-up options and much more.</p>
        <div className="heroContentBtn">
            <Link to="/" className="heroContentBtnBookRide">Book Ride &nbsp;<i class="fa-solid fa-circle-check"></i></Link>
            <Link to="/" className="heroContentBtnLearnMore">Learn More &nbsp;<i class="fa-solid fa-angle-right"></i></Link>
        </div>
        </div>
        <img src={heroImage} className="heroImage"/>
    </div>
    </section>
    </>;
}
export default Hero
