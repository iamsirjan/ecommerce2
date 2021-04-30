import React from "react";
import Login from "./Component/login";
import Register from "./Component/register";
import Home from "./Component/home";
import Product from "./Component/products";
import Checkout from "./Component/checkout";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/product">
            <Product />
          </Route>
          <Route path="/checkout">
            <Checkout />
          </Route>

          <Route path="/">
            <Login />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
