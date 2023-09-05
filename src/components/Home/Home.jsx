import React from "react";
import Header from "./Header";
import Body from "./Body";
import ContactMe from "./ContactMe"

function Home(){
    const ColoredLine = ({ color }) => (
        <hr className="colored-line"/>
    );
    return(
        <>
            <Header className="header"/>
            <ColoredLine color="white"/>
            <Body />
            <ColoredLine color="white"/>
            <ContactMe />
            {/* <ColoredLine color="white"/> */}
        </>
    );
}

export default Home;