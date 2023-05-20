import React, { useState } from "react";
import FaqQuestions from "./FaqQuestions";
import classNames from "classnames";
function Faq(){
    const [activeQ,setActiveQ]=useState("q1");
    const openQ =(id)=>{
        setActiveQ(id===activeQ?" ":id);
    };
    const openQuestion=(id)=>{
        return id==activeQ?"openQuestion":null;
    };
    const openAnswer=(id)=>{
        return id==activeQ?"openAnswer":null;
    };
    return <div className="FaqOut">
        <div className="Faq">
        <div className="FaqHead">
        <h3>FAQ</h3>
        <h2>Frequently Asked Questions</h2>
        <p>Frequently Asked Questions About the Car Rental Booking Process on Our Website: Answers to Common Concerns and Inquiries.</p>
        </div>
        <div className="FaqDiv">
            <div className="FaqQuestionBox">
            <div id="q1" onClick={()=>openQ("q1")} className={classNames("FaqQuestions",openQuestion("q1"))}>
                <p>1. What is special about comparing rental car deals?</p>
                <i className="fa-solid fa-angle-down"></i>
            </div>
            <div id="q1" onClick={()=>openQ("q1")} className={classNames("FaqQuestionsAns",openAnswer("q1"))}>
            Comparing rental car deals is important as it helps find the best deal that fits your budget and requirements, ensuring you get the most value for your money. By comparing various options, you can find deals that offer lower prices, additional services, or better car models. You can find car rental deals by researching online and comparing prices from different rental companies.
            </div>
            </div>
            <div className="FaqQuestionBox">
            <div id="q2" onClick={()=>openQ("q2")} className={classNames("FaqQuestions",openQuestion("q2"))}>
                <p>2. How do I find the car rental deals?</p>
                <i className="fa-solid fa-angle-down"></i>
            </div>
            <div id="q2" onClick={()=>openQ("q2")} className={classNames("FaqQuestionsAns",openAnswer("q2"))}>
            You can find car rental deals by researching online and comparing prices from different rental companies. Websites such as Expedia, Kayak, and Travelocity allow you to compare prices and view available rental options. It is also recommended to sign up for email newsletters and follow rental car companies on social media to be informed of any special deals or promotions.
            </div>
            </div>
            <div className="FaqQuestionBox">
            <div id="q3" onClick={()=>openQ("q3")} className={classNames("FaqQuestions",openQuestion("q3"))}>
                <p>3. How do I find such low rental car prices?</p>
                <i className="fa-solid fa-angle-down"></i>
            </div>
            <div id="q3" onClick={()=>openQ("q3")} className={classNames("FaqQuestionsAns",openAnswer("q3"))}>
            Book in advance: Booking your rental car ahead of time can often result in lower prices. Compare prices from multiple companies: Use websites like Kayak, Expedia, or Travelocity to compare prices from multiple rental car companies. Look for discount codes and coupons: Search for discount codes and coupons that you can use to lower the rental price. Renting from an off-airport location can sometimes result in lower prices.
            </div>
            </div>
        </div>
        </div>
    </div>
}
export default Faq