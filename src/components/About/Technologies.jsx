import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiPython,
  DiGit,
  DiJava,
} from "react-icons/di";
import {SiJquery,SiBootstrap,SiHtml5, SiCss3} from "react-icons/si"
import { TbSql } from "react-icons/tb";

function Technologies() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "6rem", marginRight:"0", marginLeft:"0"}}>
       <Col xs={4} md={2} className="tech-icons">
        <SiHtml5 />
        <p style={{fontSize:"1.5rem"}}>HTML</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiCss3 />
        <p style={{fontSize:"1.5rem"}}>CSS</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
        <p style={{fontSize:"1.5rem"}}>JavaScript</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJava />
        <p style={{fontSize:"1.5rem"}}>Java</p>
      </Col>
       <Col xs={4} md={2} className="tech-icons">
        <DiPython />
        <p style={{fontSize:"1.5rem"}}>Python</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJquery/>
        <p style={{fontSize:"1.5rem"}}>Jquery</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiBootstrap/>
        <p style={{fontSize:"1.5rem"}}>Bootstrap</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
        <p style={{fontSize:"1.5rem"}}>NodeJs</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
        <p style={{fontSize:"1.5rem"}}>ReactJs</p>
      </Col> 
      <Col xs={4} md={2} className="tech-icons">
        <TbSql />
        <p style={{fontSize:"1.5rem"}}>SQL</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
        <p style={{fontSize:"1.5rem"}}>Git</p>
      </Col>   
    </Row>
  );
}

export default Technologies;