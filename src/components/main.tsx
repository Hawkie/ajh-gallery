import * as React from "react";
import { Component } from "react";
import { HashRouter, NavLink, Route } from "react-router-dom";
import Contact from "./contact";
import Home from "./home";
import Products from "./products";
import Projects from "./projects";

export class Main extends Component {
  public render(): React.ReactNode {
    return (
        <HashRouter>
        <div>
          <h1>Hawkie</h1>
          <ul className="header">
            <li><NavLink exact to="/">Home</NavLink></li>
            <li><NavLink to="/products">Products</NavLink></li>
            <li><NavLink to="/projects">Projects</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
          </ul>
          <div className="content">
          <Route exact path="/" component={Home}/>
            <Route path="/products" component={Products}/>
            <Route path="/projects" component={Projects}/>
            <Route path="/contact" component={Contact}/>
          </div>
        </div>
        </HashRouter>
    );
  }
}
