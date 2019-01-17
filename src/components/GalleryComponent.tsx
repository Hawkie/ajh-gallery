import * as React from "react";
import { Component } from "react";
import { categoryEnum, IExhibitDetail } from "../ts/Exhibit";
import { ExhibitItemComponent } from "./ExhibitItemComponent";

export interface IGallery {
  readonly exhibits: ReadonlyArray<IExhibitDetail>;
  readonly paintings: boolean;
  readonly assemblages: boolean;
}

export class GalleryComponent extends Component<IGallery> {

  constructor(props: IGallery) {
    super(props);
  }

public render(): React.ReactNode {
    let items: IExhibitDetail[] = this.props.exhibits.map((x: IExhibitDetail) => x);
    if (!this.props.paintings) {
        items = items.filter((e) => e.catId !== categoryEnum.Painting);
    }
    if (!this.props.assemblages) {
        items = items.filter((e) => e.catId !== categoryEnum.Assemblage);
    }
    return (
        <div className="gallery">
            {items.map((e) => (
                <ExhibitItemComponent
                    key={e.id}
                    id={e.id}
                    catId={e.catId}
                    category={e.category}
                    description={e.description}
                    medium={e.medium}
                    title={e.title}
                    url={e.url}>
                </ExhibitItemComponent>
            ))}
        </div>
    );
  }
}
