// import * as D from './data';

// export default function App() {
//   return (
//     <div>
//       <p>
//         {D.randomName()}, {D.randomJobTitle()}, {D.randomDayMonthYear()}
//       </p>
//       <img src={D.randomAvatar()} height="50" />
//       <img src={D.randomImage()} height="300" />
//     </div>
//   );
// }

// import { Component } from "react";
// import ClassComponent from "./ClassComponent";

// // App이라는 기본 클래스를 정의. 이 클래스는 Component를 확장하여 리액트 컴포넌트로 작동.
// export default class App extends Component {
//   // render 메서드는 리액트 컴포넌트가 화면에 어떻게 렌더링될지를 정의.
//   render() {
//     // const isLoading = true;
//     // // if (isLoading) return <p>loading...</p>;
//     // // children에 JSX 요소 할당.
//     // const children = isLoading ? (
//     //   <p>loading...</p>
//     // ) : (
//     //   <li>
//     //     <a href="https://www.google.com">
//     //       <p>go to google</p>
//     //     </a>
//     //   </li>
//     // );
//     // // return 문은 이 컴포넌트가 렌더링할 JSX 요소를 반환.
//     // return (
//     //   <div>
//     //     {children}
//     //     {/* {isLoading && <p>loading...</p>}
//     //     {!isLoading && <ul>{children}</ul>} */}
//     //   </div>
//     // );
//     return (
//       // href는 attribute. string은 ""로 넘겨도 됨. number는 {} 보간으로. 객체를 넘겨도 됨({} 안에).
//       <ul>
//         <ClassComponent href="https://www.google.com" text="go to google" />
//         <ClassComponent href="https://www.x.com" text="go to x(twitter)" />
//       </ul>
//     );
//   }
// }

import { Component } from "react";
import ClassComponent from "./ClassComponent";
import ArrowComponent from "./ArrowComponent";
import P from "./P";

// export default function App() {
//   return <div>Hello function keyword component!</div>;
// }

// const App = () => {
//   // return <h1>Hello function keyword component!</h1>;
//   return (
//     <ul>
//       <ClassComponent href="https://www.google.com" text="go to google" />
//       <ArrowComponent href="https://www.x.com" text="go to X(twitter)" />
//     </ul>
//   )
// }

// const App = () => {
//   // const texts = [<p key="1">hello</p>, <p key="2">world</p>];
//   // const texts = ["hello", "world"].map((item, index) => {
//   //   return <p key={index + 1}>{item}</p>;
//   // });
//   // refactoring map 함수 사용
//   // [...].map((item, index) => <tag>)
//   // const texts = ["hello", "world"].map((item, index) => (
//   //   <p key={index} children={item} />
//   // ));
//   const texts = ["hello", "world"].map((item, index) => (
//     <P key={index} children={item} />
//   ));
//   return <div children={texts} />;
// };

// export default App;





// event 처리 부분
import EventListener from './pages/EventListener';
import OnClick from './pages/OnClick';
import ReactOnclick from './pages/ReactOnClick';
import DispatchEvent from './pages/DispatchEvent';
import EventBubbling from './pages/EventBubbling';
import StopPropagation from './pages/StopPropagation';
import VariousInputs from './pages/VariousInputs';
import OnChange from './pages/OnChange';
import FileInput from './pages/FileInput';
import DragDrop from './pages/DragDrop';
import FileDrop from './pages/FileDrop';

export default function App() {
  return (
    <div>
      <FileDrop />
      <DragDrop />
      <FileInput />
      <OnChange />
      <VariousInputs />
      <StopPropagation />
      <EventBubbling />
      <DispatchEvent />
      <ReactOnclick />
      <OnClick />
      <EventListener />
    </div>
  );
}