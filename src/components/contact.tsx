import * as React from "react";
import { Component } from "react";

export class Contact extends Component {
  public render(): React.ReactNode {
    const email: string|undefined = process.env.EMAIL;
    const env: string|undefined = process.env.NODE_ENV;
    return (
      <div className="contact">
        <h2>Where to find AJH art.</h2>
        <h4>Exhibits</h4>
        <li>Poole Hospital, Poole, Dorset: <a
        href="https://artuk.org/discover/artists/hawkins-anita-josephine-b-1943">Art UK</a>
        </li>
        <hr></hr>
        <p>Art query email: <a href="mailto:hawkinsartwork2019@gmail.com?Subject=AJH%20Art%20Query">
        hawkinsartwork2019@gmail.com</a></p>
        <p>Gallery admin email: <a href="mailto:paulhawkins123@gmail.com?Subject=AJH%20Admin%20Query">
        {email}</a></p>
        <p>env: {env}</p>
      </div>
    );
  }
}

export default Contact;
