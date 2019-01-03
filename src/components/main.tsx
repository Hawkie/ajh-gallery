import * as React from "react";
import { Component } from "react";
import { BrowserRouter, HashRouter, NavLink, Route, Switch } from "react-router-dom";
import Assemblages from "./assemblages";
import Contact from "./contact";
import { DetailsComponent } from "./DetailsComponent";
import Home from "./home";
import Paintings from "./paintings";

export class Main extends Component {
  public render(): React.ReactNode {
    return (
      <BrowserRouter>
        <div>
          <div className="top">
            <img src="/ajh-logo.png"></img>
            <h1>AJH Gallery</h1>
          </div>
            <ul className="header">
              <li><NavLink exact to="/">Home</NavLink></li>
              <li><NavLink to="/assemblages">Assemblages</NavLink></li>
              <li><NavLink to="/paintings">Paintings</NavLink></li>
              <li><NavLink to="/contact">Contact</NavLink></li>
            </ul>
            <div className="content">
              <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/assemblages/:id" component={DetailsComponent}/>
                <Route exact path="/assemblages" component={Assemblages}/>
                <Route path="/paintings/:id" component={DetailsComponent}/>
                <Route exact path="/paintings" component={Paintings}/>
                <Route path="/contact" component={Contact}/>
              </Switch>
            </div>
        </div>
        </BrowserRouter>
    );
  }
}
