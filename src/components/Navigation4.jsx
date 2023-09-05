import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import MenuIcon from '@mui/icons-material/Menu';
import CodeSharpIcon from '@mui/icons-material/CodeSharp';
import HomeIcon from '@mui/icons-material/Home';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import PersonIcon from '@mui/icons-material/Person';
import FeedbackIcon from '@mui/icons-material/Feedback';
import FeedIcon from '@mui/icons-material/Feed';
import { Link } from 'react-router-dom';


function Navigation4(){
  
  return(
    <nav class="navbar navbar-expand-lg Navbar sticky-top">
  <div class="container-fluid NAVBAR">
  <Link className="navbar-brand" aria-current="page" as={Link} to="/" href="#home"><CodeSharpIcon sx={{ fontSize: 60 }} className="nav-logo"/></Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <MenuIcon className="navbar-toggler-icon" sx={{fontSize: 50, color:"aliceblue"}}/>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
        <Link className="nav-link active nav1" aria-current="page" as={Link} to="/" href="#home"><HomeIcon sx={{ fontSize: 25 }} className="nav-icon"/><br/>Home</Link>
        </li>
        <li class="nav-item">
        <Link className="nav-link active nav1" as={Link} to="/about" href="#about"><PersonIcon sx={{ fontSize: 25 }} className="nav-icon"/><br/>About</Link>
        </li>
        <li class="nav-item">
        <Link className="nav-link active nav1" as={Link} to="/cv" href="#cv"><FeedIcon sx={{ fontSize: 25 }} className="nav-icon"/><br/>CV</Link>
        </li>
        <li class="nav-item">
        <Link className="nav-link active nav1" as={Link} to="/fun" href="#fun"><SportsEsportsIcon sx={{ fontSize: 25 }} className="nav-icon"/><br/>Fun</Link>
        </li>
        <li class="nav-item">
        <Link className="nav-link active nav1" as={Link} to="/feed" href="#feed"><FeedbackIcon sx={{ fontSize: 25 }} className="nav-icon"/><br/>Feedback</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
  );
}

export default Navigation4;
