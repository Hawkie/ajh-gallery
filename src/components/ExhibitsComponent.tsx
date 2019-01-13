import * as React from "react";
import { Component } from "react";
import { Route, Switch } from "react-router";
import { NavLink } from "react-router-dom";
import { IExhibitDetail } from "../ts/Exhibit";
import { readAll } from "../ts/FetchData";
import { DetailsComponent } from "./DetailsComponent";
import { GalleryComponent } from "./GalleryComponent";

interface IExhibitFilter {
    category: string;
}

interface IExhibits {
  readonly data: ReadonlyArray<IExhibitDetail>;
}

export class ExhibitsComponent extends Component<IExhibitFilter, IExhibits>  {
  constructor(props: IExhibitFilter) {
    super(props);
    this.state = { data: [] };
  }

  public render(): React.ReactNode {
    return (
        <div>
            <ul className="header">
                <li><NavLink to="/exhibits/assemblages">Assemblages</NavLink></li>
                <li><NavLink to="/exhibits/paintings">Paintings</NavLink></li>
            </ul>
            <Switch>
            <Route path="/exhibits/assemblage/:id" render={(props) =>
                    <DetailsComponent
                        match={props.match}
                        exhibits={this.state.data}/>}>}
                    </Route>
                <Route exact path="/exhibits/assemblages" render={() =>
                    <GalleryComponent
                        category="assemblage"
                        exhibits={this.state.data}/>}/>
                <Route path="/exhibits/painting/:id" render={(props) =>
                    <DetailsComponent
                        match={props.match}
                        exhibits={this.state.data}/>}>}
                    </Route>
                <Route exact path="/exhibits/paintings" render={() =>
                    <GalleryComponent
                        category="painting"
                        exhibits={this.state.data}/>}/>
            </Switch>
        </div>
    );
  }

  public async componentDidMount() {
    const data: IExhibitDetail[] = await readAll("/.netlify/functions/galleryData");
    this.setState({ data });
  }
}

export default ExhibitsComponent;
