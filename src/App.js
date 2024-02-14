import React, { Fragment, useContext} from "react";
import "./App.css";
import Header from "./components/header/Header";
import Products from "./components/products/Products";
import Footer from "./components/footer/Footer";
import Cart from "./components/cart/Cart";
import CartContext from "./store/cart-context";
import ProductContextProvider from "./store/ProductContextProvider";

function App() {
  const cartCtx = useContext(CartContext)

  return (
    <Fragment>
      <Header/>
      {cartCtx.isCartActive && <Cart/>}
      <ProductContextProvider>
        <Products/>
      </ProductContextProvider>
      <Footer/>
    </Fragment>
  );
}

export default App;
