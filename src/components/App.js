import React from "react";
import { Route, Switch } from "react-router-dom";
import Login from "./Login";
import About from "./About";
import Home from "./Home";
import NavBar from "./NavBar";

function App() {
    return (
      <div>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
      </Switch>
      </div>
    )}

    export default App;