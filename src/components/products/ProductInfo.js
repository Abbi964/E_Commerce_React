import React, { useContext, useEffect, useState } from "react";
import ProductContext from "../../store/product-context";
import { useParams } from "react-router-dom";
import { Card } from "react-bootstrap";

function ProductInfo(props) {
  const prodCtx = useContext(ProductContext);
  // getting paramObj from url
  let paramObj = useParams();
  // making a state for product
  const [product, setProduct] = useState({});

  // using useEffect to get product INfo
  useEffect(() => {
    let productId = paramObj.productId;

    let result = prodCtx.products.filter((prod) => {
      return prod.id === +productId;
    });
    setProduct(result.length > 0 ? result[0] : "Wrong Id");
  }, [prodCtx,paramObj]);

  return (
    <Card
      id={product.id}
      key={product.id}
      className="m-5"
      style={{ width: "18rem", border: "none" }}
    >
      <Card.Title>{product.title}</Card.Title>
      <Card.Img src={product.imageUrl}></Card.Img>
      <Card.Body className="d-flex justify-content-between">
        <Card.Text>{`$${product.price}`}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default ProductInfo;
