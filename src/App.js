import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Store from "./pages/Store";
import About from "./pages/About";
import Home from "./pages/Home";
import ContactUs from "./pages/ContactUs";

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
      </Switch>
    </Fragment>
  );
}

export default App;
