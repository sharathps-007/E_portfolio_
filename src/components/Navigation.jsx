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

function Navigation() {
  return (
    <Navbar collapseOnSelect expand="lg" className="navbar-dark sticky-top">
      <Container>
        <Navbar.Brand className="navbar-brand" aria-current="page" as={Link} to="/" href="#home"><CodeSharpIcon sx={{ fontSize: 60 }} className="nav-logo"/></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className="nav-link active nav1" aria-current="page" as={Link} to="/" href="#home"><HomeIcon sx={{ fontSize: 25 }} className="nav-icon"/><br/>Home</Nav.Link>
            <Nav.Link className="nav-link active nav1" as={Link} to="/about" href="#about"><PersonIcon sx={{ fontSize: 25 }} className="nav-icon"/><br/>About</Nav.Link>
            <Nav.Link className="nav-link active nav1" as={Link} to="/cv" href="#cv"><FeedIcon sx={{ fontSize: 25 }} className="nav-icon"/><br/>CV</Nav.Link>         
            <Nav.Link className="nav-link active nav1" as={Link} to="/fun" href="#fun"><SportsEsportsIcon sx={{ fontSize: 25 }} className="nav-icon"/><br/>Fun</Nav.Link>
            <Nav.Link className="nav-link active nav1" as={Link} to="/feed" href="#feed"><FeedbackIcon sx={{ fontSize: 25 }} className="nav-icon"/><br/>Feedback</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;