import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import * as D from "./data";
import "./index.css";

const children = D.makeArray(10).map((notUsed, index) => (
  <div key={index}>
    <p>{D.randomId()}</p>
    <p>{D.randomName()}</p>
    <p>{D.randomJobTitle()}</p>
    <p>{D.randomSentence()}</p>
    <img src={D.randomAvatar()} width={100} height={100} />
  </div>
));
const rootVirtualDOM = <App />;

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(rootVirtualDOM);