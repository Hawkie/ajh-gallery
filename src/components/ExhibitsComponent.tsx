import * as React from "react";
import { Component } from "react";
import { Route, Switch } from "react-router";
import { Button, ButtonGroup } from "reactstrap";
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

export class ExhibitsComponent extends Component<{}, IExhibitsState>  {
  constructor(props: IExhibitFilter) {
    super(props);
    this.state = {
        assemblages: true,
        data: [],
        paintings: true,
    };
    this.click = this.click.bind(this);
  }

  public click(radioId: number): void {
    this.setState((prevState: IExhibitsState) => (
        {...prevState,
            // tslint:disable-next-line:no-bitwise
            assemblages: (radioId & categoryEnum.Assemblage) === categoryEnum.Assemblage,
            // tslint:disable-next-line:no-bitwise
            paintings: (radioId & categoryEnum.Painting) === categoryEnum.Painting,
        }));
  }

  public render(): React.ReactNode {
    return (
        <div>
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
            <div>
                <ButtonGroup>
                <Button
                        color="secondary"
                        onClick={() => this.click(categoryEnum.All)}
                        active={this.state.paintings && this.state.assemblages}>
                    All</Button>
                    <Button
                        color="secondary"
                        onClick={() => this.click(categoryEnum.Painting)}
                        active={this.state.paintings}>
                    Paintings</Button>
                    <Button
                        color="secondary"
                        onClick={() => this.click(categoryEnum.Assemblage)}
                        active={this.state.assemblages}>
                    Assemblages</Button>
                </ButtonGroup>
                    <GalleryComponent
                        exhibits={this.state.data}
                        paintings={this.state.paintings}
                        assemblages={this.state.assemblages}/>
            </div>
            </Route>
            </Switch>
        </div>
    );
  }

  public async componentDidMount() {
    const data: IExhibitDetail[] = await readAll("/.netlify/functions/galleryData");
    this.setState((prevState: IExhibitsState) => (
        {...prevState,
            data,
        }));
  }
}

export default ExhibitsComponent;
