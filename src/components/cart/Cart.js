import React, { useContext } from "react";
import { Button, Card, Col, Container, Image, Row } from "react-bootstrap";
import CartContext from "../../store/cart-context";

function Cart(porps) {
  const cartCtx = useContext(CartContext)

  // showing total price
  let totalPrice = 0;
  cartCtx.items.forEach((item)=>{
    totalPrice += (item.price * item.quantity)
  })

  function removeItemHandler(e){
    const id = e.target.parentElement.parentElement.id
    
    cartCtx.removeFromCart(id)
  }

  return (
    <Card className="d-flex justify-content-center" style={{ width: '30rem',position:'absolute',top:'60px',right:'5px',zIndex:'20' }}>
        <Card.Title style={{marginLeft:'35%',fontSize:'2rem'}}>Cart</Card.Title>
        <Container>
            <Row className="mt-2 mb-3">
                <Col className="border-bottom">ITEM</Col>
                <Col className="border-bottom">PRICE</Col>
                <Col className="border-bottom">QUANTITY</Col>
            </Row>
            {cartCtx.items.map((item,index)=>{
               return (<Row key={item.id} id={item.id} className="mt-2">
                    <Col>
                        <div className="d-flex">
                            <Image style={{width:'55%'}} fluid src={item.imageUrl} rounded/>
                            <span className="ms-2">{`Album ${index + 1}`}</span>
                        </div>
                    </Col>
                    <Col>
                        <span>{item.price}</span>
                    </Col>
                    <Col>
                        <input style={{width:'40px'}} defaultValue={item.quantity} min='1' type="number"/>
                        <Button onClick={removeItemHandler}  size="sm" className="ms-2" bg='dark' variant="danger">Remove</Button>
                    </Col>
                </Row>)
            })}
            <Row className="mt-2 mb-3">
                <Col></Col>
                <Col></Col>
                <Col>{`Total  $${totalPrice}`}</Col>
            </Row>
        </Container>
        <div className="d-flex justify-content-center mb-3">
            <Button style={{width:'30%'}} bg='dark' variant="primary">PURCHASE</Button>
        </div>
    </Card >
  );
}

export default Cart;
