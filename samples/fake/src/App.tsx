// // event 처리 부분
// import EventListener from './pages/EventListener';
// import OnClick from './pages/OnClick';
// import ReactOnclick from './pages/ReactOnClick';
// import DispatchEvent from './pages/DispatchEvent';
// import EventBubbling from './pages/EventBubbling';
// import StopPropagation from './pages/StopPropagation';
// import VariousInputs from './pages/VariousInputs';
// import OnChange from './pages/OnChange';
// import FileInput from './pages/FileInput';
// import DragDrop from './pages/DragDrop';
// import FileDrop from './pages/FileDrop';

// export default function App() {
//   return (
//     <div>
//       <FileDrop />
//       <DragDrop />
//       <FileInput />
//       <OnChange />
//       <VariousInputs />
//       <StopPropagation />
//       <EventBubbling />
//       <DispatchEvent />
//       <ReactOnclick />
//       <OnClick />
//       <EventListener />
//     </div>
//   );
// }

import "./index.css";
import Bootstrap from "./pages/Bootstrap";
import Icon from "./pages/Icon";
// import Style from "./pages/Styles";
// import UsingIcon from "./pages/UsingIcon";
// import UsingIconWithCSSClass from "./pages/UsingIconWithCSSClass";

export default function App() {
  return (
    <div>
      {/* <UsingIconWithCSSClass />
      <UsingIcon />
      <Style /> */}
      <Icon />
      <Bootstrap />
    </div>
  );
}