import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavigationBar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Rhoyalinn Cereno</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav>
            <Nav.Link href="home">Home</Nav.Link>
            <Nav.Link href="aboutme">About Me</Nav.Link>
            <Nav.Link href="resume">Resume</Nav.Link>
            <NavDropdown title="Projects" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="sideprojects">Side Projects</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="academicprojects">Academic Projects</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link eventKey={2} href="contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;