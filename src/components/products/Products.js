import React, { Fragment } from "react";
import { Button, Card, Container } from "react-bootstrap";

function Products(props) {
  const productsArr = [
    {
      title: "Colors",
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    },
    {
      title: "Black and white Colors",
      price: 50,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    },
    {
      title: "Yellow and Black Colors",
      price: 70,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    },
    {
      title: "Blue Color",
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    },
  ];

  return (
    <Fragment>
      <div
        className="d-flex justify-content-center bg-dark-subtle pb-5"
        style={{ fontSize: "5rem" }}
      >
        The Generics
      </div>
      <Container>
        <div className="d-flex justify-content-center mt-3">
          <h2>Music</h2>
        </div>
        <div id="productDiv" className="d-flex mt-3 justify-content-center" style={{flexWrap:'wrap'}}>
            {productsArr.map((product)=>{
                return (
                    <Card className="m-5" style={{width:'18rem',border:'none'}}>
                        <Card.Title>{product.title}</Card.Title>
                        <Card.Img src={product.imageUrl}></Card.Img>
                        <Card.Body className="d-flex justify-content-between">
                            <Card.Text>{`$${product.price}`}</Card.Text>
                            <Button>ADD TO CART</Button>
                        </Card.Body>
                    </Card>
                )
            })}
        </div>
        <div className="d-flex justify-content-center" id='BtnDiv'>
            <Button variant="secondary">See The Cart</Button>
        </div>
      </Container>
    </Fragment>
  );
}

export default Products;
