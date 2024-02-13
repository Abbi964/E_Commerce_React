import React, { Fragment } from "react";
import "./App.css";
import Header from "./components/header/Header";
import Products from "./components/products/Products";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <Fragment>
      <Header/>
      <Products/>
      <Footer/>
    </Fragment>
  );
}

export default App;
