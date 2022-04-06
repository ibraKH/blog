import React from "react";
import "./Working.css";
import Header from "../Header/Header.jsx";




const Working = () => {

    

    return (
        <div id="working">
            <Header color="white" />
            <div id="workingContainer">
                <div id="WorkingImageContainer" className="workingDetail">
                    <img src="/images/vector.png" alt="working" className="workingImage" />
                    <div id="insideImageContainer">
                        <img src="/images/run.png" alt="run" className="runImage" data-aos="fade-right" />
                        <h3 data-aos="fade-left">This page is in Development</h3>
                        <button className="workingButton"><a href="/" className="workingLinks">Go back</a></button>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Working;