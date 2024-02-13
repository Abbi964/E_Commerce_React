import React from "react";
import {  Container, Nav, Navbar, Button, Badge } from "react-bootstrap";

function Header(props) {
  return (
    <header>
      <Navbar variant="dark" bg="dark" expand="lg">
        <Container style={{paddingLeft : '25rem'}}>
          <Nav style={{ fontWeight:'bold' }}>
            <Nav.Link>HOME</Nav.Link>
            <Nav.Link>STORE</Nav.Link>
            <Nav.Link>ABOUT</Nav.Link>
          </Nav>
        </Container>
        <Button variant="outline-primary dark">cart</Button><Badge bg="dark">0</Badge>
      </Navbar>
    </header>
  );
}

export default Header;
