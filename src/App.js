import React, { Fragment, useState } from "react";
import "./App.css";
import Header from "./components/header/Header";
import Products from "./components/products/Products";
import Footer from "./components/footer/Footer";
import Cart from "./components/cart/Cart";

function App() {
  const [isCartActive, setIsCartActive] = useState(false)

  function cartToggleHandler(){
    setIsCartActive(prev=>!prev)
  }

  return (
    <Fragment>
      <Header onCartOpen={cartToggleHandler}/>
      {isCartActive && <Cart/>}
      <Products/>
      <Footer/>
    </Fragment>
  );
}

export default App;
