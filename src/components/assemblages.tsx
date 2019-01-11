import * as React from "react";
import { Component } from "react";
import { IExhibitDetail } from "../ts/Exhibit";
import { GalleryComponent } from "./GalleryComponent";

const a1: IExhibitDetail = {
  description: "Poole Harbour scene in wood",
  id: 1,
  medium: "assemblage",
  size: "",
  title: "Harbourside",
  url: "/res/img/A_Harbourside.jpg",
  year: 2017,
};
const a2: IExhibitDetail = {
  description: "Vegetable Patch",
  id: 2,
  medium: "assemblage",
  size: "",
  title: "Vegetable Patch",
  url: "/res/img/A_VegetablePatch.jpg",
  year: 2017,
};
const a3: IExhibitDetail = {
  description: "Poole Harbour",
  id: 3,
  medium: "assemblage",
  size: "",
  title: "Poole Harbour",
  // tslint:disable-next-line:max-line-length
  url: "https://lh3.googleusercontent.com/SiDLYCkG--WNNjKCYdnExZHfNc1sDLwJ7iqzE-dJLUqFOa_4KDeujyAwm772Q8HdgIOOiZ44YRRXRsdBDg-WnWhLzL7II4cZaFJCu29RzLhotLx8LjZ_x7aM40fUNeqELXm7W_Uoh_M=w2400",
  year: 2016,
};

export function assemblages(): ReadonlyArray<IExhibitDetail> {
  return [a1, a2, a3];
}

export class Assemblages extends Component {
  public render(): React.ReactNode {
    return (
      <div>
        <GalleryComponent category="assemblages" exhibits={assemblages()}></GalleryComponent>
      </div>
    );
  }
}

export default Assemblages;
