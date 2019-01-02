import * as React from "react";
import { Component } from "react";

export class Projects extends Component {
  public render(): React.ReactNode {
    return (
      <div>
        <h2>Projects</h2>
        <p>My development projects:</p>
        <ol>
          <li>Create Art website and shopping basket</li>
          <li>Create Home Wiki</li>
          <li>Begin Augmented Reality app for multiplay boardgame</li>
          <li>Publish Boardgame</li>
        </ol>
        <ol>
            <li>Web Library: multiplayer game server (use swagger)</li>
            <li>Web Library: include 3d</li>
        </ol>
      </div>
    );
  }
}

export default Projects;
