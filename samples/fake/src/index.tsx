import React from "react";
import ReactDOM from "react-dom/client";
// import ReactDOM from 'react-dom/client';
// import './index.css';
import App from "./App";
// import reportWebVitals from './reportWebVitals';
import * as D from "./data";

// const root = ReactDOM.createRoot(
//   document.getElementById('root') as HTMLElement
// );
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// const hello = "Hello World";
// const children = [
//   <li>
//     <a href="https://www.google.com" target="_blank">
//       <p>go to Google</p>
//       <input type="text" />
//       <img src="some url" />
//       <p>{/* string must be wrapped by Text */}</p>
//       <p>{hello}</p>
//     </a>
//   </li>,
//   <li>
//     <a href="https://www.facebook.com" target="_blank">
//       <p>go to Facebook</p>
//       <input type="text" />
//       <img src="some url" />
//       <p>{/* string must be wrapped by Text */}</p>
//       <p>{hello}</p>
//     </a>
//   </li>,
//   <li>
//     <a href="https://www.twitter.com" target="_blank">
//       <p>go to Twitter</p>
//       <input type="text" />
//       <img src="some url" />
//       <p>{/* string must be wrapped by Text */}</p>
//       <p>{hello}</p>
//     </a>
//   </li>,
// ];
// const rootVirtualDOM = <ul>{children}</ul>;

// const children = [0, 1, 2].map((n: number) => <h3>Hello World! {n}</h3>);

const children = D.makeArray(10).map((notUsed, index) => (
  <div key={index}>
    <p>{D.randomId()}</p>
    <p>{D.randomName()}</p>
    <p>{D.randomJobTitle()}</p>
    <p>{D.randomSentence()}</p>
    <img src={D.randomAvatar()} width={100} height={100} />
  </div>
));
// const rootVirtualDOM = <div>{children}</div>;
const rootVirtualDOM = <App />;

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(rootVirtualDOM);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
