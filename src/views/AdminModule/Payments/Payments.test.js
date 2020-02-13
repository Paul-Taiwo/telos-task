import React from "react";
import ReactDOM from "react-dom";
import Payments from "./Payments";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Payments />, div);
  ReactDOM.unmountComponentAtNode(div);
});
