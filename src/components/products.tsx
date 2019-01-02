import * as React from "react";
import { Component } from "react";

export class Products extends Component {
  public render(): React.ReactNode {
    return (
      <div>
        <h2>Products Built</h2>
        <p>My home development projects:</p>

        <ol>
          <li>
            Suduko and Samari Solver.
            Desktop app written in C# and WPF. General framework for solving logic,elimination space puzzles. 2008.
            <code><a href="http://github.com/hawkie/solver">Github code</a></code></li>
          <li>
            <a href="http://spacecommand.000webhostapp.com/">Space Command </a>
            Web application written in typescript.
            Game Hosted in Oct 2018 at spacecommand.000webhostapp.com
            <code><a href="http://github.com/hawkie/spacecommand"> Github code </a></code></li>
          <li>
            <a href="http://hawkie123.itch.io/air-rider">Air Rider </a>
            Web application written in typescript.
            Game Hosted in Nov 2018 at hawkie123.itch.io/air-rider for programming jam (Ludum Dare 43)
            <code><a href="http://github.com/hawkie/ludumdare43"> Github code </a></code></li>
        </ol>
      </div>
    );
  }
}

export default Products;
