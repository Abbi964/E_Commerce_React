import React, { useState } from "react";
import CartContext from "./cart-context";

function CartContextProvider(porps) {
  // making state for iscartActive and cartItems
  const [isCartActive, setIsCartActive] = useState(false);
  const [cartItems, setCartItems] = useState([])

  function cartToggleHandler() {
    setIsCartActive((prev) => !prev);
  }


  //---------------------------------------------------------------
  function addToCartHandler(product) {

    // if product is already in cart then increasing its quantity
    let alreadyInCart = false;

    let newCartItem = [];
    if(cartItems.length > 0){
        newCartItem = cartItems.map((item)=>{
            if (item.id === `c${product.id}`){
                item.quantity = +item.quantity + 1
                alreadyInCart = true;
                return item
            }
            else{
                return item
            }
        });
    }

    // else adding new item
    if (!alreadyInCart){
        newCartItem.push({
            id : `c${product.id}`,
            title : product.title,
            price : product.price,
            imageUrl : product.imageUrl,
            quantity : 1
        })
    }

    setCartItems(newCartItem)

  }

  //-----------------------------------------------------
  function removeFromCartHandler(id) {
    let newCartItems = cartItems.filter((item)=>{
        return item.id !== id
    });

    setCartItems(newCartItems)
  }

  //-------------------------------------------------------------//

  const contextValueObj = {
    isCartActive: isCartActive,
    items : cartItems,
    toggleCart: cartToggleHandler,
    addToCart: addToCartHandler,
    removeFromCart: removeFromCartHandler,
  };

  return (
    <CartContext.Provider value={contextValueObj}>
      {porps.children}
    </CartContext.Provider>
  );
}

export default CartContextProvider;
