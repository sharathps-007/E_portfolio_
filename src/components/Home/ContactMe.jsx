import React from "react";
import {Container, Row, Col} from "react-bootstrap"
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

function ContactMe(){

    return <div class="connect">
        <Container>
            <Row>
                <Col>
                    <h2 style={{marginBottom:"1.5rem"}}>Let's get <b>connected</b> on</h2>
                </Col>
            </Row>
            
                
<a href="https://github.com/sharathps-007" style={{backgroundColor:"transparent", borderColor:"transparent"}} class="btn btn-primary"><GitHubIcon sx={{ fontSize: "2rem" }} className="icon-logo"/></a>
<a href="https://twitter.com/sharathps_1" style={{backgroundColor:"transparent", borderColor:"transparent"}} class="btn btn-primary"><TwitterIcon sx={{ fontSize: "2rem" }} className="icon-logo"/></a>
<a href="https://www.linkedin.com/in/sharath-p-s-165b09203" style={{backgroundColor:"transparent", borderColor:"transparent"}} class="btn btn-primary"><LinkedInIcon sx={{ fontSize: "2rem" }} className="icon-logo"/></a>
<a href="https://www.instagram.com/_sharath_ps_" style={{backgroundColor:"transparent", borderColor:"transparent"}} class="btn btn-primary"><InstagramIcon sx={{ fontSize: "2rem" }} className="icon-logo"/></a>
                
            
        </Container>
    </div>
}

export default ContactMe;