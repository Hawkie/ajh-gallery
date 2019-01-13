import * as React from "react";
import { Component } from "react";
import { BrowserRouter, HashRouter, NavLink, Route, Switch } from "react-router-dom";
import Contact from "./contact";
import { DetailsComponent } from "./DetailsComponent";
import ExhibitsComponent from "./ExhibitsComponent";
import Home from "./home";

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
              <li><NavLink to="/exhibits">Exhibits</NavLink></li>
              <li><NavLink to="/contact">Contact</NavLink></li>
            </ul>
            <div className="content">
              <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/exhibits" component={ExhibitsComponent}/>
                <Route path="/contact" component={Contact}/>
              </Switch>
            </div>
        </div>
        </BrowserRouter>
    );
  }
}
