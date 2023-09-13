import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from "../CartWidget/CartWidget";

function NavBar() {
  return (
    <>
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Uman</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#transparente">Línea transparente</Nav.Link>
            <Nav.Link href="#blanca">Línea blanca</Nav.Link>
            <Nav.Link href="#papel">Línea papel</Nav.Link>
          </Nav>
        </Container>
        <CartWidget/>
      </Navbar>
      </>
  );
}

export default NavBar;
