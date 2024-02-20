import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import CartContextProvider from "./store/cartContextProvider";
import ProductContextProvider from "./store/ProductContextProvider";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <ProductContextProvider>
      <CartContextProvider>
        <App />
      </CartContextProvider>
    </ProductContextProvider>
  </BrowserRouter>
);
