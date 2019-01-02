import * as React from "react";
import { Component } from "react";
import { HashRouter, NavLink, Route } from "react-router-dom";
import Assemblages from "./assemblages";
import Contact from "./contact";
import Home from "./home";
import Paintings from "./paintings";

export class Main extends Component {
  public render(): React.ReactNode {
    return (
        <HashRouter>
        <div className="navbar">
          <h1>AJH Gallery</h1>
          <ul className="header">
            <li><NavLink exact to="/">Home</NavLink></li>
            <li><NavLink to="/assemblages">Assemblages</NavLink></li>
            <li><NavLink to="/paintings">Paintings</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
          </ul>
          <div className="content">
          <Route exact path="/" component={Home}/>
            <Route path="/assemblages" component={Assemblages}/>
            <Route path="/paintings" component={Paintings}/>
            <Route path="/contact" component={Contact}/>
          </div>
        </div>
        </HashRouter>
    );
  }
}
