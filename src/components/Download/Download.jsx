import React from "react";
import Appstore from "../src/Images/appstore.png";
function Download(){
    return <div className="DownloadOut">
        <div className="DownloadInner">
            <h2>Download our app to get most out of it</h2>
            <p>Thrown shy denote ten ladies though ask saw. Or by to he going think order event music. Incommode so intention defective at convinced. Led income months itself and houses you.</p>
            <div>
                <img src={Appstore} className="DownloadBtn"/>
            </div>
        </div>
    </div>
}
export default Download
