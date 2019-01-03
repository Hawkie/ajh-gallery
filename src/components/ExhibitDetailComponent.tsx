import * as React from "react";
import { Component } from "react";
import { NavLink } from "react-router-dom";
import { ExhibitItemComponent, IExhibitItem } from "./ExhibitItemComponent";

export interface IExhibitDetail extends IExhibitItem {
  year: number;
}

export class ExhibitDetailComponent extends Component<IExhibitDetail> {
  constructor(props: IExhibitDetail) {
    super(props);
  }

public render(): React.ReactNode {
  return (
      <div className="exhibit">
        <h4>{this.props.id}. {this.props.title}</h4>
        <NavLink to={`/paintings/${this.props.id}`}>
          <img src={"/res/img/" + this.props.filename}></img>
        </NavLink>
        <p>Description: {this.props.description}</p>
        <p>Medium: {this.props.medium}</p>
        <p>Size: {this.props.size}</p>
        <p>Year: {this.props.year}</p>
      </div>
    );
  }
}
