import * as React from "react";
import { Component } from "react";
import { NavLink } from "react-router-dom";
import { IExhibitBase } from "../ts/Exhibit";
import { PriceComponent } from "./PriceComponent";

export class ExhibitItemComponent extends Component<IExhibitBase> {
  constructor(props: IExhibitBase) {
    super(props);
  }

  public render(): React.ReactNode {
    return (
      <div className="exhibit">
        <h4>
          {this.props.id}. {this.props.title}
        </h4>
        <NavLink to={`/exhibits/${this.props.category}/${this.props.id}`}>
          <img src={this.props.url}></img>
        </NavLink>
        <p>Description: {this.props.description}</p>
        <p>Medium: {this.props.medium}</p>
        <PriceComponent price={this.props.price} />
      </div>
    );
  }
}
