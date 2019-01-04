import * as React from "react";
import { Component } from "react";
import { IExhibitDetail } from "./ExhibitDetailComponent";
import { GalleryComponent, IGallery } from "./GalleryComponent";

const p1: IExhibitDetail = {
  description: "View of corfe castle in between the downs",
  id: 1,
  medium: "acrylic on canvas",
  size: "50.6 x 50.6 cm",
  title: "Celebrating the Purbecks",
  url: "/res/img/P_DOR_PLH_PCF37.jpg",
  year: 2006,
};
const p2: IExhibitDetail = {
  description: "View from the top of the cliff along the Dorset Jurassic coastline",
  id: 2,
  medium: "acrylic on canvas",
  size: "75.5 x 75 cm",
  title: "Stairhole",
  url: "/res/img/P_DOR_PLH_PCF120.jpg",
  year: 2008,
};
const p3: IExhibitDetail = {
  description: "View from the top of the cliff along the Dorset Jurassic coastline",
  id: 3,
  medium: "acrylic on canvas",
  size: "75.5 x 75 cm",
  title: "Another Stairhole",
  url: "/res/img/P_DOR_PLH_PCF120.jpg",
  year: 2008,
};

export function paintings(): ReadonlyArray<IExhibitDetail> {
  return [p1, p2, p3];
}

export class Paintings extends Component {
  public render(): React.ReactNode {
    return (
      <div>
        <GalleryComponent category="paintings" exhibits={paintings()}></GalleryComponent>
      </div>
    );
  }
}

export default Paintings;
