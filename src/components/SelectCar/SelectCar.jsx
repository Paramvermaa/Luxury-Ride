import React, { useState } from "react";
import ShowCar from "./ShowCar";
import {CarData} from "./CarData";
function SelectCar()
{
    const [active,setActive]=useState("firstCar");
    return <div className="selectCar">
            <div className="SelectCarInnerDiv">
            <h4>Vehicle Models</h4>
            <h2>Our Rental Fleet</h2>
            <p>Choose from a variety of our amazing vehicles to rent for your next adventure or business trip</p>
            </div>
            <div className="selectCarDisplay">
            <div className="selectCarBtn">
            <button type="button" className={active=="firstCar"&&"selectCarBtnActive"} onClick={()=>{setActive("firstCar")}}>Ferrari</button>
            <button type="button" className={active=="secondCar"&&"selectCarBtnActive"} onClick={()=>{setActive("secondCar")}}>Lamborghini</button>
            <button type="button" className={active=="thirdCar"&&"selectCarBtnActive"} onClick={()=>{setActive("thirdCar")}}>Porsche</button>
            <button type="button" className={active=="fourthCar"&&"selectCarBtnActive"} onClick={()=>{setActive("fourthCar")}}>Pagani</button>
            <button type="button" className={active=="fifthCar"&&"selectCarBtnActive"} onClick={()=>{setActive("fifthCar")}}>Buggati</button>
            </div>
            <div className="selectCarInfo">
                {active=="firstCar"&&<ShowCar data={CarData} carId={0}/>}
                {active=="secondCar"&&<ShowCar data={CarData} carId={1}/>}
                {active=="thirdCar"&&<ShowCar data={CarData} carId={2}/>}
                {active=="fourthCar"&&<ShowCar data={CarData} carId={3}/>}
                {active=="fifthCar"&&<ShowCar data={CarData} carId={4}/>}
            </div>
            </div>
            
    </div>
}
export default SelectCar