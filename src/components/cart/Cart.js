import React, { useState } from "react";
import { Button, Card, Col, Container, Image, Row } from "react-bootstrap";

function Cart(porps) {
  const cartElements = [
    {
      id : 1,
      title: "Colors",
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
      quantity: 2,
    },
    {
        id : 2,
      title: "Black and white Colors",
      price: 50,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
      quantity: 3,
    },
    {
      id : 3,
      title: "Yellow and Black Colors",
      price: 70,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
      quantity: 1,
    },
  ];

  const [items, setItems] = useState(cartElements)

  function removeItemHandler(e){
    const id = e.target.parentElement.parentElement.id
    setItems((items)=>{
        let newItems = items.filter((item)=>{
            return item.id !== +id
        })
        return newItems
    })
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
            {items.map((item,index)=>{
               return (<Row id={item.id} className="mt-2">
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
                        <input style={{width:'40px'}} defaultValue='1' min='1' type="number"/>
                        <Button onClick={removeItemHandler} size="sm" className="ms-2" bg='dark' variant="danger">Remove</Button>
                    </Col>
                </Row>)
            })}
            <Row className="mt-2 mb-3">
                <Col></Col>
                <Col></Col>
                <Col>{`Total  $${27.98}`}</Col>
            </Row>
        </Container>
        <div className="d-flex justify-content-center mb-3">
            <Button style={{width:'30%'}} bg='dark' variant="primary">PURCHASE</Button>
        </div>
    </Card >
  );
}

export default Cart;
