import * as React from "react";
import { Component } from "react";

interface IPrice {
  price: number;
}

export class PriceComponent extends Component<IPrice> {
  constructor(props: IPrice) {
    super(props);
  }

  public render(): React.ReactNode {
    if (this.props.price !== undefined) {
      return (
        <div>
          <p>Price: £{this.props.price}</p>
          {/* <p>Add to Basket:
                        <label className="bs-switch">
                            <input type="checkbox" />
                            <span className="slider round"></span>
                        </label>
                    </p> */}
        </div>
      );
    }
    return <p>No listed price.</p>;
  }
}
