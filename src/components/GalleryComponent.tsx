import * as React from "react";
import { Component } from "react";
import { IExhibitDetail } from "../ts/Exhibit";
import { ExhibitItemComponent } from "./ExhibitItemComponent";

export interface IGallery {
  exhibits: ReadonlyArray<IExhibitDetail>;
  category: string;
}

export class GalleryComponent extends Component<IGallery> {

  constructor(props: IGallery) {
    super(props);
  }

public render(): React.ReactNode {
    return (
        <div className="gallery">
            {this.props.exhibits.filter((e) => e.category === this.props.category).map((e) => (
                <ExhibitItemComponent
                    key={e.id}
                    id={e.id}
                    description={e.description}
                    medium={e.medium}
                    title={e.title}
                    url={e.url}
                    category={this.props.category}>
                </ExhibitItemComponent>
            ))}
        </div>
    );
  }
}
