import * as React from "react";
import { Component } from "react";
import { Route, Switch } from "react-router";
import { NavLink } from "react-router-dom";
import { categoryEnum, IExhibitDetail } from "../ts/Exhibit";
import { readAll } from "../ts/FetchData";
import { DetailsComponent } from "./DetailsComponent";
import { GalleryComponent } from "./GalleryComponent";

interface IExhibitFilter {
    filterCatId: categoryEnum;
}

interface IExhibitsState {
  readonly data: ReadonlyArray<IExhibitDetail>;
  readonly paintings: boolean;
  readonly assemblages: boolean;
}

export class ExhibitsComponent extends Component<IExhibitFilter, IExhibitsState>  {
  constructor(props: IExhibitFilter) {
    super(props);
    this.state = {
        assemblages: true,
        data: [],
        paintings: true,
    };
  }

  public check(event: React.ChangeEvent<HTMLInputElement>): void {
    if (event.target.id === "paintings") {
        this.setState((prevState: IExhibitsState) => (
            {...prevState,
                paintings: !prevState.paintings,
            }));
    } else if (event.target.id === "assemblages") {
        this.setState((prevState: IExhibitsState) => (
            {...prevState,
                assemblages: !prevState.assemblages,
            }));
        }
  }

  public render(): React.ReactNode {
    return (
        <div>
            <div>
            <input type="checkbox"
                id="paintings"
                name="paintings"
                onChange={this.check.bind(this)}
                checked={this.state.paintings}/>
            <text>Paintings</text>
            <input type="checkbox"
                id="assemblages"
                name="assemblages"
                onChange={this.check.bind(this)}
                checked={this.state.assemblages}/>
                <text>Assemblages</text>
          </div>
            <Switch>
            <Route path="/exhibits/assemblage/:id" render={(props) =>
                <DetailsComponent
                    match={props.match}
                    exhibits={this.state.data}/>}>
            </Route>
            <Route path="/exhibits/painting/:id" render={(props) =>
                <DetailsComponent
                    match={props.match}
                    exhibits={this.state.data}/>}>
            </Route>
            <Route path="/exhibits">
                <GalleryComponent
                    exhibits={this.state.data}
                    paintings={this.state.paintings}
                    assemblages={this.state.assemblages}/>
            </Route>
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
