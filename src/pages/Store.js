import React,{Fragment, useContext} from "react";
import Header from "../components/header/Header";
import CartContext from "../store/cart-context";
import Cart from "../components/cart/Cart";
import Products from "../components/products/Products";
import Footer from '../components/footer/Footer'

function Store() {
    const cartCtx = useContext(CartContext)

  return (
    <Fragment>
      <Header cartBtnVisible={true} />
      {cartCtx.isCartActive && <Cart />}
      <Products />
      <Footer />
    </Fragment>
  );
}

export default Store;
