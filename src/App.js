import React from "react";
import Characters from "./Components/Characters";
import Home from "./Components/Home";
import NavBar from "./Components/NavBar";
import Chars from "./Components/Chars";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import "./index.css";
import "./App.css";

export default function App() {
  return (
    <Router>
    <div className="App overflow-hidden">
      <NavBar></NavBar>
      <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/Home" component={Home}></Route>
        <Route path="/Characters" exact component={Characters}></Route>
        <Route path="/character/:id" component={Chars}></Route>
      </Switch>
    </div>
    </Router>
  );
};