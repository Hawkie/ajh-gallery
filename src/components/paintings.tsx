import * as React from "react";
import { Component } from "react";
import { IExhibit } from "./ExhibitComponent";
import { GalleryComponent, IGallery } from "./GalleryComponent";

const e1: IExhibit = {
  description: "View of corfe castle in between the downs",
  filename: "DOR_PLH_PCF37.jpg",
  id: 1,
  medium: "acrylic on canvas",
  size: "50.6 x 50.6 cm",
  title: "Celebrating the Purbecks",
  year: 2006,
};
const e2: IExhibit = {
  description: "View from the top of the cliff along the Dorset Jurassic coastline",
  filename: "DOR_PLH_PCF120.jpg",
  id: 2,
  medium: "acrylic on canvas",
  size: "75.5 x 75 cm",
  title: "Stairhole",
  year: 2008,
};
const e3: IExhibit = {
  description: "View from the top of the cliff along the Dorset Jurassic coastline",
  filename: "DOR_PLH_PCF120.jpg",
  id: 3,
  medium: "acrylic on canvas",
  size: "75.5 x 75 cm",
  title: "Another Stairhole",
  year: 2008,
};

export class Paintings extends Component {
  public static readonly exhibits: ReadonlyArray<IExhibit> = [e1, e2, e3];
  public render(): React.ReactNode {
    const g: IGallery = {
      exhibits: Paintings.exhibits,
    };
    return (
      <div>
        <GalleryComponent exhibits={g.exhibits}></GalleryComponent>
      </div>
    );
  }
}

export default Paintings;