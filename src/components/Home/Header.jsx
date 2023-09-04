import React from "react";
import Container from 'react-bootstrap/Container';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Type from "./Type"; 
import Caro from "./Carousel";
// import Caro2 from "./Carousel2";

function Header(){
    return(
        <div className="header" style={{zIndex:"1"}}>
            <Container>
            <Row>
                <Col><p className="hello">Hey there!</p></Col>
            </Row>
            <Row style={{paddingTop:"5%",height:"30rem"}}>
                <Col xs={{span:12,order:2}} md={{span:6,order:1}}><Caro /></Col>
                <Col xs={{span:12,order:1}} md={{span:6,order:2}}>
                    <p className="sharath">I'm Sharath</p>
                    <p className="type"><Type /></p>
                </Col>
            </Row>
        </Container>
        </div>
    );

}

export default Header;