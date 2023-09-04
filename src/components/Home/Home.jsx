import React from "react";
import Header from "./Header";
import Body from "./Body";
import ContactMe from "./ContactMe"

function Home(){
    const ColoredLine = ({ color }) => (
        <hr
            style={{
                height: 0,
                borderStyle: "doubled",
                borderWidth: "0.3rem",
                borderBottom: "0",
                borderColor: "white",
                margin: "3rem 30% 8rem 30%"
            }}
        />
    );
    return(
        <>
            <Header />
            <ColoredLine color="white"/>
            <Body />
            <ColoredLine color="white"/>
            <ContactMe />
            {/* <ColoredLine color="white"/> */}
        </>
    );
}

export default Home;