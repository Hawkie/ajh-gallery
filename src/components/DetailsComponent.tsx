import * as React from "react";
import { Component } from "react";
import { match } from "react-router-dom";
import { IExhibitDetail } from "../ts/Exhibit";
import { readAll } from "../ts/FetchData";
import Assemblages, { assemblages } from "./assemblages";
import { ExhibitDetailComponent } from "./ExhibitDetailComponent";
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
    // if (this.props.match.url.search("paintings") > -1) {
    //     return paintings();
    // } else
    if (this.props.match.url.search("assemblages") > -1) {
        return assemblages();
    }
    return [];
}

public async componentDidMount() {
    const data: IExhibitDetail[] = await readAll("/.netlify/functions/galleryData");
    this.setState({ data });
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
                    url={e.url}
                    year={e.year}>
                </ExhibitDetailComponent>
            </div>
        );
    }
  }
}
