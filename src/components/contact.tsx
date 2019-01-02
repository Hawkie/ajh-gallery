import * as React from "react";
import { Component } from "react";

export class Contact extends Component {
  public render(): React.ReactNode {
    return (
      <div>
        <h2>Contact Me.</h2>
        <p>Github username: <code><a href="http://github.com/hawkie">Hawkie</a></code>.</p>
      </div>
    );
  }
}

export default Contact;
