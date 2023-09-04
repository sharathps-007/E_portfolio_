import React from "react";
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CodeSharpIcon from '@mui/icons-material/CodeSharp';
import HomeIcon from '@mui/icons-material/Home';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import PersonIcon from '@mui/icons-material/Person';
import FeedbackIcon from '@mui/icons-material/Feedback';
import FeedIcon from '@mui/icons-material/Feed';
import Header from "./Home/Header";
import Body from "./Home/Body";
import ContactMe from "./Home/ContactMe";


function Navigation(){
    return (
        // <div className="welcome" style={{zIndex:"1"}}>
         <Navbar class="navbar navbar-expand-lg NAVBAR" style={{position:"sticky",top:"2rem",zIndex:"1"}} bg="" data-bs-theme="dark">
        <Container>
          <Navbar.Brand className="brand" as={Link} to="/" style={{marginRight:"66%"}}><><CodeSharpIcon sx={{ fontSize: 60 }}/></></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link className="link" as={Link} to="/" href="#home"><HomeIcon style={{marginRight:"10%"}}/>Home</Nav.Link>
            <Nav.Link className="link" as={Link} to="/about" href="#about"><PersonIcon style={{marginRight:"10%"}}/>About</Nav.Link>
            <Nav.Link className="link" as={Link} to="/cv" href="#cv"><FeedIcon style={{marginRight:"10%"}}/>CV</Nav.Link>
            <Nav.Link className="link" as={Link} to="/fun" href="#fun"><SportsEsportsIcon style={{marginRight:"10%"}}/>Fun</Nav.Link>
            <Nav.Link className="link" as={Link} to="/feed" href="#feed"><FeedbackIcon style={{marginRight:"10%"}}/>Feedback</Nav.Link>
          </Nav>
        </Container>
        </Navbar>
        // </div>  
      );

}
export default Navigation;