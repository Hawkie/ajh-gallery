import * as React from "react";
import { Component } from "react";

export interface IExhibit {
  id: number;
  title: string;
  year: number;
  description: string;
  medium: string;
  size: string;
  filename: string;
}

interface IState {
  s: string;
}

export class ExhibitComponent extends Component<IExhibit, IState> {
  constructor(props: IExhibit) {
    super(props);
  }

public render(): React.ReactNode {
  return (
      <div>
        <h4>{this.props.id}. {this.props.title}</h4>
        <img src={"/res/img/" + this.props.filename}></img>
        <p>Description: {this.props.description}</p>
        <p>Medium: {this.props.medium}</p>
        <p>Size: {this.props.size}</p>
      </div>
    );
  }
}
