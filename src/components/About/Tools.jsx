import React from "react";
import { Col, Row } from "react-bootstrap";

import {SiIntellijidea,SiPycharm,SiGithub, SiApachenetbeanside,SiAtom,SiEclipseide,SiMicrosoftoffice} from "react-icons/si"
import {TbBrandVscode} from "react-icons/tb"
function Tools() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
       <Col xs={4} md={2} className="tech-icons">
        <TbBrandVscode />
        <p style={{fontSize:"1.5rem"}}>VSCode</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiIntellijidea />
        <p style={{fontSize:"1.5rem"}}>Intellij IDEA</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPycharm />
        <p style={{fontSize:"1.5rem"}}>PyCharm</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGithub />
        <p style={{fontSize:"1.5rem"}}>Github</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiApachenetbeanside />
        <p style={{fontSize:"1.5rem"}}>NetBeans</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAtom />
        <p style={{fontSize:"1.5rem"}}>Atom</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMicrosoftoffice />
        <p style={{fontSize:"1.5rem"}}>MS Office</p>
      </Col>
    </Row>
  );
}

export default Tools;