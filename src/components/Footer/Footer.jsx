import React from "react";
import "./Footer.css";

const Footer = () => {
    return (
        <div id="footer">
            <div id="footerContainer">
                <img src="/images/footerVector.png" alt="vector" className="footerVector" />
                <div id="footerTextContainer">
                    <div id="footerAboutme" className="footerText">
                        <h4 className="footerText"><a href="/about" className="footerLinks">ABOUT ME</a></h4>
                    </div>
                    <div id="footerContact">
                        <h4 className="footerText"><a href="/contact" className="footerLinks">CONTACT</a></h4>
                    </div>
                    <div id="footerBlogs">
                        <h4 className="footerText"><a href="/" className="footerLinks">BLOGS</a></h4>
                    </div>
                </div>
                <div id="footerCR">
                    <h6 className="copyRight">© ibra, All rights reserved 2022</h6>
                </div>
            </div>
        </div>
    )
}


export default Footer;