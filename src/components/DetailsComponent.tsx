import * as React from "react";
import { Component } from "react";
import { match } from "react-router-dom";
import Assemblages from "./assemblages";
import { ExhibitDetailComponent, IExhibitDetail } from "./ExhibitDetailComponent";
import { Paintings } from "./paintings";

export interface IParams {
    id?: string;
    url: string;
}

export interface IDetails {
  match: match<IParams>;
  details: IExhibitDetail;
}

export class DetailsComponent extends Component<IDetails> {
  constructor(props: IDetails) {
    super(props);
}

public find(): ReadonlyArray<IExhibitDetail> {
    if (this.props.match.url.search("paintings") > -1) {
        return Paintings.exhibits;
    } else if (this.props.match.url.search("assemblages") > -1) {
        return Assemblages.exhibits;
    }
    return [];
}

public render(): React.ReactNode {
    if (this.props.match.params.id !== undefined) {
        const id: number = +this.props.match.params.id;
        const e: IExhibitDetail = this.find()[id - 1];
        return (
            <div className="details">
                <ExhibitDetailComponent
                    key={e.id}
                    id={e.id}
                    description={e.description}
                    medium={e.medium}
                    size={e.size}
                    title={e.title}
                    filename={e.filename}
                    year={e.year}>
                </ExhibitDetailComponent>
            </div>
        );
    }
  }
}
