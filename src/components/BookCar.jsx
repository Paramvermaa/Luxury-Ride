import React from "react";
function BookCar()
{
    const dater=new Date();
    let month=(dater.getMonth()+1)?"0"+(dater.getMonth()+1):dater.getMonth();
    let date=dater.getFullYear()+"-"+month+"-"+dater.getDate();
    console.log(date);
    return <div className="bookCar" id="bookCar">
        <div className="bookCarInner">
        <h3>Book a Car</h3>
        <div className="bookCarContent">
            <form className="bookCarForm">
                <div className="bookCarFormDiv">
                <label><i className="fa-solid fa-car"/>&nbsp; Select Your Car Type</label>
                <select>
                    <option >Select Your Car Type</option>
                    <option>ferrari</option>
                    <option>Lamborghini</option>
                    <option>Porsche</option>
                    <option>Pagani</option>
                    <option>Buggati</option>
                </select>
                </div>
                <div className="bookCarFormDiv">
                <label><i className="fa-solid fa-location-dot"></i>&nbsp; Pick-up</label>
                <select>
                    <option >Select Pick-up Location</option>
                    <option>Delhi</option>
                    <option>Bangalore</option>
                    <option>Chandigarh</option>
                    <option>Chennai</option>
                    <option>Hyderabad</option>
                </select>
                </div>
                <div className="bookCarFormDiv">
                <label><i className="fa-solid fa-location-dot"></i>&nbsp; Drop-off</label>
                <select>
                    <option >Select Drop Off Location</option>
                    <option>Delhi</option>
                    <option>Bangalore</option>
                    <option>Chandigarh</option>
                    <option>Chennai</option>
                    <option>Hyderabad</option>
                </select>
                </div>
                <div className="bookCarFormDiv">
                <label><i class="fa-regular fa-calendar-days "></i>&nbsp; Pick-up</label>
                <input type="date" value={date} />
                </div>
                <div className="bookCarFormDiv">
                <label><i class="fa-regular fa-calendar-days "></i>&nbsp; Drop-of</label>
                <input type="date" value={date} />
                </div>
                <div className="bookCarFormButton">
                <button type="submit" >Search</button>
                </div>
            </form>
        </div>
        </div>
    </div>
}
export default BookCar