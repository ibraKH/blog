import React from "react";

import Typewriter from 'typewriter-effect';
import "./Landing.css";


class Landing extends React.Component{

    render(){
        return(
            <div id='tyText'>
                <Typewriter options={{
                    strings: ["Welcome", "Hello", "Web Developer"],
                    autoStart: true,
                    loop: true,
                }}/>
            </div>
        )
    }
    
}

export default Landing;