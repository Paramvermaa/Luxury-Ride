import React from "react";
import TestimonialCard from "./TestimonialCard";
import ramJi from "/Users/bossv/carrental-app/src/Images/HD-wallpaper-jay-shri-ram-golden-art-work-lord-god-bhakti.jpg";
import krishnaJi from "/Users/bossv/carrental-app/src/Images/krishna.png"
function Testimonials(){
    return<div className="testimonialOut">
        <div className="testimonialsDiv">
        <div className="testimonialHead">
            <h3>Reviewed by People</h3>
            <h2>Client's Testimonials</h2>
            <p>Discover the positive impact we've made on the our clients by reading through their testimonials. Our clients have experienced our service and results, and they're eager to share their positive experiences with you.</p>
        </div>
        <div className="testimonialCard">
            <TestimonialCard img={ramJi} p="We rented a car from this website and had an amazing experience! The booking was easy and the rental rates were very affordable. " name="Shree Ram" address="Ayodhya"/>
            <TestimonialCard img={krishnaJi} p="The car was in great condition and made our trip even better. Highly recommend for this car rental website!" name="Shree Krishna" address="Dwarka"/>
        </div>
        </div>
    </div>;
}
export default Testimonials