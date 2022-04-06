import React from "react";
import "./Navbar.css"


const Navbar = () => {
    return(
        <div id="navbarBigScreen">
            <div id="navbarIconsContainer">
                <div id="socialIconsContainer">
                    <div id="telegram" className="socialIcons">
                        <a href="https://t.me/CEibra" target={"_blank"}><img src="/images/icons/telegram.webp"/></a>
                    </div>
                    <div id="twitter" className="socialIcons">
                        <a href="https://twitter.com/IGsibra" target={"_blank"}><img src="/images/icons/twitter.webp"/></a>
                    </div>
                    <div id="github" className="socialIcons">
                        <a href="https://github.com/ibraKH" target={"_blank"}><img src="/images/icons/github.webp"/></a>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Navbar;