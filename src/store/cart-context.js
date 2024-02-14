import React from "react";

const CartContext = React.createContext({
    isCartActive: false,
    items : [],
    toggleCart: ()=>{},
    addToCart: ()=>{},
    removeFromCart: ()=>{},
})

export default CartContext;