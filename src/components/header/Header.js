import React, { useContext } from "react";
import {  Container, Nav, Navbar, Button, Badge } from "react-bootstrap";
import CartContext from "../../store/cart-context";
import { NavLink } from 'react-router-dom'
import classes from './Header.module.css'

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
        <Container style={{paddingLeft : '12rem',minHeight : '40px'}}>
          <Nav style={{ fontWeight:'bold',width: '75%', justifyContent: 'space-evenly', alignItems: 'center' }}>
            <NavLink activeClassName={classes.active} className={classes.nav_link} to='/home'>HOME</NavLink>
            <NavLink  exact={true} activeClassName={classes.active} className={classes.nav_link} to='/'>STORE</NavLink>
            <NavLink activeClassName={classes.active} className={classes.nav_link} to='/about'>ABOUT</NavLink>
            <NavLink activeClassName={classes.active} className={classes.nav_link} to='/contact-us'>CONTACT US</NavLink>
          </Nav>
        </Container>
        {props.cartBtnVisible && <div id="cartBtnDiv" className="position-absolute end-0">
          <Button onClick={cartCtx.toggleCart} variant="outline-primary dark">cart</Button>
          <Badge bg="dark">{noOfItemsInCart}</Badge>
        </div>}
      </Navbar>
    </header>
  );
}

export default Header;
