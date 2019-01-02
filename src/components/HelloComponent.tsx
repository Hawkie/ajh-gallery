import * as React from "react";
import { Component } from "react";

interface IProps {
  myText: string;
}

interface IState {
  s: string;
}

export class HelloComponent extends Component<IProps, IState> {

  constructor(props: IProps) {
    super(props);
  }

public render(): React.ReactNode {
  return (
      <div>{this.props.myText}</div>
    );
  }
}
