import React, { useState } from "react";
import "./Header.css";


const Header = ({color = "transparent"}) => {

    const [theme , setTheme] = useState(color === "transparent" ? true : false);
    const [navbar, setNavbar] = useState(false);
    const [navbarExpand , setNavbarExpand] = useState(false);
    const [count , setCount ] = useState(0);


    const expand = () => {
        if(navbar){
            setCount(1);
            setNavbar(false);
            return setNavbarExpand(false);
        }

        setNavbar(true);
        return setNavbarExpand(true);
    }


    return (
        <div id="header" className={theme ? navbarExpand ? "navHeaderActive transparentTheme" : count === 0 ? "headerNavbarContainer transparentTheme" : "navHeaderNotActive transparentTheme" : navbarExpand ? "navHeaderActive whiteTheme" : count === 0 ? "headerNavbarContainer whiteTheme" : "navHeaderNotActive whiteTheme"}>
            <div id="headerNavbarContent" className={navbar ? "show" : "hide"}>
                <div>
                    <div id="AboutMeNavHeader">
                        <h4><a href="/about" className="headerLinks">ABOUT ME</a></h4>
                    </div>
                    <div id="ContactNavHeader">
                        <h4><a href="/contact" className="headerLinks">CONTACT</a></h4>
                    </div>
                    <div id="BlogsNavHeader">
                        <h4><a href="/Blogs" className="headerLinks">BLOGS</a></h4>
                    </div>
                </div>
            </div>
            <div id="navbar" onClick={expand}>
                <div id="barsContainer">
                    <div id="topBar" className={navbar ? "leftCrosed" : "normal"}>

                    </div>
                    <div id="bottomBar" className={navbar ? "rightCrosed" : "normal"}>

                    </div>
                </div>
            </div>
            <div id="leftHeaderContainer">
                <div id="leftCH">
                    <div id="logoContainer" data-aos="flip-left">
                        <h1 className="ibra"><a href="/" className="toMainLink">IBRA BLOG</a></h1>
                    </div>
                </div>
            </div>
            <div id="centerHeaderContainer">
                <div id="headerText">
                    <div id="aboutMe" className="headerText">
                        <h4><a href="/about" className="headerLinks">ABOUT ME</a></h4>
                    </div>
                    <div id="contact" className="headerText">
                        <h4><a href="/contact" className="headerLinks">CONTACT</a></h4>
                    </div>
                    <div id="blogsHeader" className="headerText">
                        <h4><a href="/Blogs" className="headerLinks">BLOGS</a></h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;