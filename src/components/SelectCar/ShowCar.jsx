import React from "react";
function ShowCar({data,carId})
{
    return <>
    {data[carId].map((car,id)=>(<div className="showCarDiv" key={id}>
        <div className="showCarImage"><img src={car.img}/></div>
        <div className="showCarInfo">
            <h4><span>₹&nbsp;{car.price}</span>&nbsp; Rent/Day</h4>
            <div>
                <div className="showCarDetails">
                    <span>Model</span>
                    <span>{car.model}</span>
                </div>
                <div className="showCarDetails">
                    <span>Mark</span>
                    <span>{car.mark}</span>
                </div>
                <div className="showCarDetails">
                    <span>Year</span>
                    <span>{car.year}</span>
                </div>
                <div className="showCarDetails">
                    <span>Doors</span>
                    <span>{car.doors}</span>
                </div>
                <div className="showCarDetails">
                    <span>AC</span>
                    <span>{car.air}</span>
                </div>
                <div className="showCarDetails">
                    <span>Transmission</span>
                    <span>{car.transmission}</span>
                </div>
                <div className="showCarDetails">
                    <span>Fuel</span>
                    <span>{car.fuel}</span>
                </div>
        </div>
        <div><a href="#bookCar">Reserve Now</a></div>
        </div>
    </div>))}
    </>;
}
export default ShowCar