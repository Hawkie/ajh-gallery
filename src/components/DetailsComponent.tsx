import * as React from "react";
import { Component } from "react";
import { match } from "react-router-dom";
import { IExhibitDetail } from "../ts/Exhibit";
import { ExhibitDetailComponent } from "./ExhibitDetailComponent";

export interface IParams {
  id?: string;
  url: string;
}

export interface IDetails {
  match: match<IParams>;
  exhibits: ReadonlyArray<IExhibitDetail>;
}

export class DetailsComponent extends Component<IDetails> {
  constructor(props: IDetails) {
    super(props);
  }

  public find(id: number): IExhibitDetail | undefined {
    return this.props.exhibits.find((e: IExhibitDetail) => {
      return e.id === id;
    });
  }

  public render(): React.ReactNode {
    if (this.props.match.params.id !== undefined) {
      const id: number = +this.props.match.params.id;
      const e: IExhibitDetail | undefined = this.find(id);
      if (e !== undefined) {
        return (
          <div className="details">
            <ExhibitDetailComponent
              key={e.id}
              id={e.id}
              catId={e.catId}
              category={e.category}
              description={e.description}
              medium={e.medium}
              price={e.price}
              size={e.size}
              title={e.title}
              url={e.url}
              year={e.year}
            ></ExhibitDetailComponent>
          </div>
        );
      }
    }
  }
}
