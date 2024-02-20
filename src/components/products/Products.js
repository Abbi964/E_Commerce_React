import React, { Fragment, useContext } from "react";
import { Button, Card, Container } from "react-bootstrap";
import ProductContext from "../../store/product-context";
import CartContext from "../../store/cart-context";
import {Link} from 'react-router-dom'

function Products(props) {
  const prodCtx = useContext(ProductContext)
  const cartCtx = useContext(CartContext)


  function addToCartHandler(e){
    let id = +e.target.parentElement.parentElement.id

    // getting product from prodContext
    let result = prodCtx.products.filter((prod)=>{
      return prod.id === id
    })
    let prod = result[0]

    cartCtx.addToCart(prod)
  }


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
            {prodCtx.products.map((product)=>{
                return (
                    <Card id={product.id} key={product.id} className="m-5" style={{width:'18rem',border:'none'}}>
                        <Card.Title>{product.title}</Card.Title>
                        <Link to={`/product/${product.id}`}><Card.Img src={product.imageUrl}></Card.Img></Link>
                        <Card.Body className="d-flex justify-content-between">
                            <Card.Text>{`$${product.price}`}</Card.Text>
                            <Button onClick={addToCartHandler}>ADD TO CART</Button>
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
