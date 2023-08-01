import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import navlogo1 from "../assets/img/nav-icon1.svg";
import navlogo2 from "../assets/img/nav-icon2.svg";
import navlogo3 from "../assets/img/nav-icon3.svg";

function navbar() {
  return (
    <Navbar expand="lg" className="bg-dark">
      <Container>
        <Navbar.Brand href="#home">MRAW</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
          </Nav>
          <Nav className="ms-auto">
            <Nav.Link href="#home">
              <img src={navlogo1} alt="nav-logo-1" />
            </Nav.Link>
            <Nav.Link href="#link">
              <img src={navlogo2} alt="nav-logo-2" />
            </Nav.Link>
            <Nav.Link href="#link">
              <img src={navlogo3} alt="nav-logo-3" />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default navbar;
