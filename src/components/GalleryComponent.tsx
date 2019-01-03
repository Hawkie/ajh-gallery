import * as React from "react";
import { Component } from "react";
import { IExhibitDetail } from "./ExhibitDetailComponent";
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
            {this.props.exhibits.map((e) => (
                <ExhibitItemComponent
                    key={e.id}
                    id={e.id}
                    description={e.description}
                    medium={e.medium}
                    size={e.size}
                    title={e.title}
                    filename={e.filename}
                    category={this.props.category}>
                </ExhibitItemComponent>
            ))}
        </div>
    );
  }
}
