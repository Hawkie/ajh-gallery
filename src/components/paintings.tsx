import * as React from "react";
import { Component } from "react";
import { IExhibitDetail } from "../ts/Exhibit";
import { readAll } from "../ts/FetchData";
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

interface IExhibits {
  readonly data: ReadonlyArray<IExhibitDetail>;
}

export class Paintings extends Component<any, IExhibits>  {
  constructor(props: null) {
    super(props);
    this.state = { data: [] };
  }

  public render(): React.ReactNode {
    return (
      <div>
        <GalleryComponent category="paintings" exhibits={this.state.data}></GalleryComponent>
      </div>
    );
  }

  public async componentDidMount() {
    const data: IExhibitDetail[] = await readAll("/.netlify/functions/galleryData");
    this.setState({ data });
  }
}

export default Paintings;
