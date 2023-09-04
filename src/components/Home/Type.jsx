import React from "react";
import Typewriter from "typewriter-effect";

export function Type(){

    return <div>
        <Typewriter 
            
                options={{
        strings: [
          "Web Designer", 
          "Desire to Improve",
          "Extreme visualization",        
          "Calisthenic Athelete",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
            }}
        />
    </div>
}

export default Type;