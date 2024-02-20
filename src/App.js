import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Store from "./pages/Store";
import About from "./pages/About";
import Home from "./pages/Home";
import ContactUs from "./pages/ContactUs";
import Product from "./pages/Product";

function App() {
  return (
    <Fragment>
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route exact path="/">
          <Store />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/contact-us">
          <ContactUs/>
        </Route>
        <Route path="/product/:productId">
          <Product/>
        </Route>
      </Switch>
    </Fragment>
  );
}

export default App;
