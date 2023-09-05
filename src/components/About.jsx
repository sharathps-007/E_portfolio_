import React from "react";
import { Container, Row , Col } from "react-bootstrap";
import Image from "./media/coderanim4.gif";
import Technologies from "./About/Technologies";
import Tools from "./About/Tools";

function About(){
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
        <Container>
          <Row>
                <Col lg={7} class="greatCol">
                    <div className="about">
                    <p class="great"><b>Your still here! ? <br/>that's great !</b></p>
                    <div class="about-body">
                        <p>Well ! <br/>I am <b style={{color:"rgb(210,210,210)"}}>Sharath</b>. 
                        I am from <b style={{color:"rgb(210,210,210)"}}>Hyderabad</b>, 
                        <b style={{color:"rgb(210,210,210)"}}>India</b>.<br/>
                        <br/>I recently graduated from 
                        <b style={{color:"rgb(210,210,210)"}}> Aurora's Technological and 
                        Research Institute</b> (Affiliated to JNTUH) in the course- 
                        <b style={{color:"rgb(210,210,210)"}}>Information Technology</b><br/><br/>
                        When I'm not working with pixels and code, you'll find me-
                        <br/>&gt;&gt; <b style={{color:"rgb(210,210,210)"}}>Travelling</b> and 
                        exploring new places<br/>&gt;&gt; <b style={{color:"rgb(210,210,210)"}}>
                        Playong</b> outdoor sports</p>
                    </div>
                    </div>
                </Col>
                <Col>
                    <img src={Image}/>
                </Col>
          </Row>
          <ColoredLine color="white"/>
          <Row>
          <p className="tech">Familier <b style={{color:"aliceblue"}}>Technologies</b></p>
          <Technologies />
          </Row>
          <Row>
          <p className="tech"><b style={{color:"aliceblue"}}>Tools</b> and <b style={{color:"aliceblue"}}>IDE's</b> used</p>
          <Tools />
          </Row>
        </Container>
        // </div>
    );
}

export default About;