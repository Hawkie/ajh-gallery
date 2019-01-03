import * as React from "react";
import { Component } from "react";
import { match } from "react-router-dom";
import { ExhibitComponent, IExhibit } from "./ExhibitComponent";
import { Paintings } from "./paintings";

export interface IParams {
    id?: string;
}

export interface IDetails {
  match: match<IParams>;
  details: IExhibit;
}

interface IState {
  s: string;
}

export class DetailsComponent extends Component<IDetails, IState> {

  constructor(props: IDetails) {
    super(props);
  }

public render(): React.ReactNode {
    if (this.props.match.params.id !== undefined) {
        const id: number = +this.props.match.params.id;
        const e: IExhibit = Paintings.exhibits[id - 1];
        return (
            <div className="details">
                <ExhibitComponent
                    key={e.id}
                    id={e.id}
                    description={e.description}
                    medium={e.medium}
                    size={e.size}
                    title={e.title}
                    filename={e.filename}
                    year={e.year}>
                </ExhibitComponent>
            </div>
        );
    }
  }
}