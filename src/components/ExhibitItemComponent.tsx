import * as React from "react";
import { Component } from "react";
import { NavLink } from "react-router-dom";

export interface IExhibitBase {
  id: number;
  title: string;
  description: string;
  medium: string;
  url: string;
}

export interface IExhibitItem extends IExhibitBase {
  category: string;
}

export class ExhibitItemComponent extends Component<IExhibitItem> {
  constructor(props: IExhibitItem) {
    super(props);
  }

public render(): React.ReactNode {
  return (
      <div className="exhibit">
        <h4>{this.props.id}. {this.props.title}</h4>
        <NavLink to={`/${this.props.category}/${this.props.id}`}>
          <img src={this.props.url}></img>
        </NavLink>
        <p>Description: {this.props.description}</p>
        <p>Medium: {this.props.medium}</p>
      </div>
    );
  }
}
