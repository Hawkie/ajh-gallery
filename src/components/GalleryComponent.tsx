import * as React from "react";
import { Component } from "react";
import { categoryEnum, IExhibitDetail } from "../ts/Exhibit";
import { ExhibitItemComponent } from "./ExhibitItemComponent";

export interface IGallery {
  exhibits: ReadonlyArray<IExhibitDetail>;
  filterCatId: categoryEnum;
}

export class GalleryComponent extends Component<IGallery> {

  constructor(props: IGallery) {
    super(props);
  }

public render(): React.ReactNode {
    const items: IExhibitDetail[] = this.props.exhibits.filter((e) => e.catId === this.props.filterCatId);
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
