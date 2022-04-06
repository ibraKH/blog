import React from "react";
import "./Main.css"

const Main = () => {
    return (
        <div id="mainContainer">
            <div id="main">
                <div id="mainImage" data-aos="flip-right">
                    <img src="/images/wallpaper.webp" alt="main" className="mainImage"/>
                </div>
                <div id="mainText">
                    <div id="mainTextContainer" data-aos="zoom-in-right">
                        <h1 className="mainText" id="visit">Visit</h1>
                        <h1 className="mainText" id="read">Read</h1>
                        <h1 className="mainText" id="learn">Learn</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Main;