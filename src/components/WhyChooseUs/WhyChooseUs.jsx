import React from "react";
import allCars from "/Users/bossv/carrental-app/src/Images/allCars.png";
import WhyChooseUsCard from "./WhyChooseUsCard";
import icon5 from "/Users/bossv/carrental-app/src/Images/icon5.png";
import icon6 from "/Users/bossv/carrental-app/src/Images/icon6.png";
import icon7 from "/Users/bossv/carrental-app/src/Images/icon7.png";
function WhyChooseUs()
{
    return <div className="WhyChooseUsOut">
        <div className="WhyChooseUsHead">
            <h1>Save big with our cheap car rental</h1>
            <h3>Top Airports. Local Suppliers. <span>24/7</span> Support.</h3>
        </div>
        <div className="WhyChooseUsDiv">
        <div>
            <div className="WhyChooseUsImg"><img src={allCars}></img></div>
            <div className="WhyChooseUsText">
            <div className="WhyChooseUsMain">
                <h3>Why Choose Us</h3>
                <h2>Best valued deals you will ever find</h2>
                <p>Discover the best deals you'll ever find with our unbeatable offers. We're dedicated to providing you with the best value for your money, so you can enjoy top-quality services and products without breaking the bank. Our deals are designed to give you the ultimate renting experience, so don't miss out on your chance to save big.</p>
                <a href="#heroSection">Find Details &nbsp;<i class="fa-solid fa-angle-right"></i></a>
            </div>
            <div className="WhyChooseUsCont">
                <WhyChooseUsCard alt="icon" img={icon5} h3="Cross Country Drive" p="Take your driving experience to the next level with our top-notch vehicles for your cross-country adventures."/>
                <WhyChooseUsCard alt="icon" img={icon6} h3="All Inclusive Pricing" p="Get everything you need in one convenient, transparent price with our all-inclusive pricing policy."/>
                <WhyChooseUsCard alt="icon" img={icon7} h3="No Hidden Charges" p="Enjoy peace of mind with our no hidden charges policy. We believe in transparent and honest pricing."/>
            </div>
            </div>
        </div>
        </div>
    </div>
}
export default WhyChooseUs