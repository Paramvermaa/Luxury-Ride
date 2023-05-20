import React from "react";
import Hero from "./Hero";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import BookCar from "./BookCar";
import PlanTrip from "./PlanTrip/PlanTrip";
import SelectCar from "./SelectCar/SelectCar";
import WhyChooseUs from "./WhyChooseUs/WhyChooseUs";
import Testimonials from "./Testimonials/Testimonials";
import Faq from "./Faq/Faq";
import Download from "./Download/Download";
import Footer from "../Footer/Footer";
function App()
{
    return <div>
        <Router>
        <Routes>
        <Route path="/" element={<Hero />}/>
        </Routes>
        </Router>
        <BookCar />
        <PlanTrip />
        <SelectCar />
        <WhyChooseUs />
        <Testimonials />
        <Faq />
        <Download />
        <Footer />
    </div>;
}
export default App