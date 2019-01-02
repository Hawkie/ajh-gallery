import React, { createElement } from "react";
import ReactDOM from "react-dom";
import { Main } from "./main";

it("renders without crashing", () => {
    const div: HTMLDivElement = document.createElement("div");
    ReactDOM.render(createElement("Main"), div);
    ReactDOM.unmountComponentAtNode(div);
  });
