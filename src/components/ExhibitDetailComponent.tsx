import * as React from "react";
import { Component } from "react";
import { IExhibitBase } from "./ExhibitItemComponent";

export interface IExhibitDetail extends IExhibitBase {
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
        <img src={"/res/img/" + this.props.filename}></img>
        <p>Description: {this.props.description}</p>
        <p>Medium: {this.props.medium}</p>
        <p>Size: {this.props.size}</p>
        <p>Year: {this.props.year}</p>
      </div>
    );
  }
}
