import React, { useEffect, useState } from "react";
import "./Blog.css";

const Blog = ({blogs}) => {

    
   const shade = "data-aos='fade-up'";


    const patterns = [
        "firstPattern","secendPattern","thirdPattern","fourthPatter"
    ];

    return(
        <div id="blog">
                <div id="blogText" data-aos="fade-up">
                        <h1 className="blogHeaderText">BLOG</h1>
                </div>
            <div id="blogContainer">
                {typeof blogs !== "undefined" ? blogs.map((x,i) => {
                    let patternStyle = patterns[Math.floor(Math.random() * patterns.length)];
                    return ( 
                    <div id={x.title} className={"blogs " + patternStyle} key={i} data-aos={i % 2 === 0 ? "fade-up-right" : "fade-up-left"}>
                        <div className="blogImage">
                            <img src={x.image} alt={"blogImage"} className="blogImages"/>
                        </div>
                        <div className="blogTextContainer">
                            <div className="blogText">
                                <section>
                                    <h2 className="blogTextHeader">{x.title}</h2>
                                </section>
                                <h3 className="blogTextFont">{x.description}</h3>
                            </div>
                            <div className="blogButtonContainer">
                                <button className="blogButton"><a href={"/"}>More</a></button>
                            </div>
                        </div>
                    </div>
                    )
                }) : <h1 className="blogHeaderText">Writing new Blog, be ready...</h1>}
            </div>
        </div>
    )
}

export default Blog;