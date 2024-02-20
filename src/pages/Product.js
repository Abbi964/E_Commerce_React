import React, { Fragment } from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import ProductInfo from "../components/products/ProductInfo";

function Product(props) {
  return (
    <Fragment>
      <Header />
      <ProductInfo/>
      <Footer />
    </Fragment>
  );
}

export default Product;
