import React, { useState, useEffect } from "react";
import { Container, Row,Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import pdf from "./media/pS_Resume.pdf";
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function Cv() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);
 
  return (
    <div>
      <Container fluid className="resume-section">
       <Row>
       <p className="tech">This is a downloadable <b style={{color:"aliceblue"}}>CV</b><br/><b style={{color:"aliceblue"}}><KeyboardDoubleArrowDownIcon style={{fontSize:"3rem"}}/></b> Please scroll down <b style={{color:"aliceblue"}}><KeyboardDoubleArrowDownIcon style={{fontSize:"3rem"}}/></b></p>
       </Row>

        <Row className="resume">
        <Col>
          <Document file={pdf} className="d-flex justify-content-center">
          
         <Page pageNumber={1} scale={width > 786 ? 1.5 : 0.4} renderTextLayer={false}/>
          </Document>
          </Col>
        </Row>

        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button className="buttonR"
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default Cv;