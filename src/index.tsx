import Test from "@components/Test";
import * as React from "react";
import * as ReactDom from "react-dom";

const render = () => {
  ReactDom.render(
    <Test />,
    document.querySelector("#app"),
  );
};

render();
