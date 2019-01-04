import * as React from "react";
import { Component } from "react";

export class Contact extends Component {
  public render(): React.ReactNode {
    return (
      <div className="contact">
        <h2>Where to find AJH art.</h2>
        <h4>Exhibits</h4>
        <li>Poole Hospital, Poole, Dorset: <a
        href="https://artuk.org/discover/artists/hawkins-anita-josephine-b-1943">Art UK</a>
        </li>
        <hr></hr>
        <p>email: <a href="hawkinsartwork2019@gmail.com">hawkinsartwork2019@gmail.com</a></p>
        <p>gallery admin: <a href="paulhawkins123@gmail.com">paulhawkins123@gmail.com</a></p>
      </div>
    );
  }
}

export default Contact;
