import * as React from "react";
import { Component } from "react";
import { ExhibitComponent, IExhibit } from "./ExhibitComponent";

export interface IGallery {
  exhibits: ReadonlyArray<IExhibit>;
}

interface IState {
  s: string;
}

export class GalleryComponent extends Component<IGallery, IState> {

  constructor(props: IGallery) {
    super(props);
  }

public render(): React.ReactNode {
    return (
        <div className="gallery">
            {this.props.exhibits.map((e) => (
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
            ))}
        </div>
    );
  }
}
