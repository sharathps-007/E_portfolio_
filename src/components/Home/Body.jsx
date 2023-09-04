import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Coderanim5 from '../media/coderanim5.gif'

function Body() {
  return (
    <Container className="body">
    <Row>
    <p>A passionate and dedicated <i style={{color:"white"}}>web designer</i> with a love
            for creating visually stunning and user-centric digital experiences.
            With a background in Information Technology, 
            I've always been drawn to the intersection of <i style={{color:"white"}}>technology and creativity</i>.</p>
    </Row>
    </Container>
  );
}

export default Body;