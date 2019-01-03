import * as React from "react";
import { Component } from "react";
import { IExhibitDetail } from "./ExhibitDetailComponent";
import { GalleryComponent } from "./GalleryComponent";

const a1: IExhibitDetail = {
  description: "Harbour scene in wood",
  filename: "A_Harbourside.jpg",
  id: 1,
  medium: "assemblage",
  size: "",
  title: "Harbourside",
  year: 2017,
};

export class Assemblages extends Component {
  public static readonly exhibits: ReadonlyArray<IExhibitDetail> = [a1];
  public render(): React.ReactNode {
    return (
      <div>
        <GalleryComponent category="assemblages" exhibits={Assemblages.exhibits}></GalleryComponent>
      </div>
    );
  }
}

export default Assemblages;
