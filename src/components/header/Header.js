import React, { useContext } from "react";
import {  Container, Nav, Navbar, Button, Badge } from "react-bootstrap";
import CartContext from "../../store/cart-context";

function Header(props) {
  const cartCtx = useContext(CartContext)

  // showing cart items number
  let noOfItemsInCart = 0;
  cartCtx.items.forEach((item)=>{
    noOfItemsInCart += item.quantity
  })

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
        <Button onClick={cartCtx.toggleCart} variant="outline-primary dark">cart</Button><Badge bg="dark">{noOfItemsInCart}</Badge>
      </Navbar>
    </header>
  );
}

export default Header;
