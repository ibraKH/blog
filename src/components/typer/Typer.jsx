import React from 'react'
import Typewriter from 'typewriter-effect';


const Typer = () => {
  return (
    <div className='typer'>
        <Typewriter

        options={{
            strings: ['ibra', 'portfolio', 'soon...'],
            autoStart: true,
            loop: true,
        }}
        
        onInit={(typewriter)=> {

        typewriter
        
        
        .deleteAll()
        .start();
        }}
        />
    </div>
  )
}

export default Typer;