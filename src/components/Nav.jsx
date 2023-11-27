import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../nav.css";

function Navigation() {
  return (
    <header>
      <Navbar
        bg="light"
        data-bs-theme="light"
        className="p-3"
        collapseOnSelect
        expand="lg"
      >
        <Container>
          <Navbar.Brand href="/" id="navbarBrand">
            Tipicos María
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home">Principal</Nav.Link>
              <Nav.Link href="#platillos">Platillos</Nav.Link>
              <Nav.Link href="#contact">Contacto</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Navigation;
