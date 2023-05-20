import React from "react";
function Footer(){
    return <div>
        <footer>
        <div className="FooterOut">
        <div className="FooterInner">
            <ul>
                <li><span>Car</span>&nbsp;Rental</li>
                <li><span>We offers a big range of vehicles for all your driving needs. We have the perfect car to meet your needs.</span></li>
                <div className="informationTag">
                <li><a href="tel:123456789">Tel: 0123456789</a></li>
                <li><a href="mailto:xyz@gmail.com">xyz@gmail.com</a></li>
                </div>
                <li>Designed by the Designer</li>
            </ul>
            <ul>
                <li>Company</li>
                <li><a href="#home">India</a></li>
                <li><a href="#home">Careers</a></li>
                <li><a href="#home">Mobile</a></li>
                <li><a href="#home">Blog</a></li>
                <li><a href="#home">How we work</a></li>
            </ul>
            <ul>
                <li>Working Hours</li>
                <li>Mon - Fri: 9:00AM - 9:00PM</li>
                <li>Sat: 9:00AM - 19:00PM</li>
                <li>Sun: Closed</li>
            </ul>
            <ul>
                <li>Subscription</li>
                <li>
                    <p>Subscribe your Email address for latest news & updates.</p>
                </li>
                <li>
                    <input type="email" placeholder="Enter Email Address"></input>
                </li>
                <li>
                    <button className="submit-email">Submit</button>
                </li>
            </ul>
        </div>
        </div>
        </footer>
    </div>
}
export default Footer