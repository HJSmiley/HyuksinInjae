// // // event 처리 부분
// // import EventListener from './pages/EventListener';
// // import OnClick from './pages/OnClick';
// // import ReactOnclick from './pages/ReactOnClick';
// // import DispatchEvent from './pages/DispatchEvent';
// // import EventBubbling from './pages/EventBubbling';
// // import StopPropagation from './pages/StopPropagation';
// // import VariousInputs from './pages/VariousInputs';
// // import OnChange from './pages/OnChange';
// // import FileInput from './pages/FileInput';
// // import DragDrop from './pages/DragDrop';
// // import FileDrop from './pages/FileDrop';

// // export default function App() {
// //   return (
// //     <div>
// //       <FileDrop />
// //       <DragDrop />
// //       <FileInput />
// //       <OnChange />
// //       <VariousInputs />
// //       <StopPropagation />
// //       <EventBubbling />
// //       <DispatchEvent />
// //       <ReactOnclick />
// //       <OnClick />
// //       <EventListener />
// //     </div>
// //   );
// // }

// import "./index.css";
// import Bootstrap from "./pages/Bootstrap";
// import Icon from "./pages/Icon";
// // import Style from "./pages/Styles";
// // import UsingIcon from "./pages/UsingIcon";
// // import UsingIconWithCSSClass from "./pages/UsingIconWithCSSClass";

// export default function App() {
//   return (
//     <div>
//       {/* <UsingIconWithCSSClass />
//       <UsingIcon />
//       <Style /> */}
//       <Icon />
//       <Bootstrap />
//     </div>
//   );
// }

// import Tailwindcss from './pages/Tailwindcss';
// import Color from './pages/Color';
// import TextsTest from './pages/TextsTest';

// export default function App() {
//   return (
//     <div>
//       <TextsTest />
//       <Color />
//       <Tailwindcss />
//     </div>
//   );
// }

import DivTest from './pages/DivTest';
import ViewportTest from './pages/ViewportTest';
import HeightTest from './pages/HeightTest';
import PaddingTest from './pages/PaddingTest';
import MarginTest from './pages/MarginTest';
import ImageTest from './pages/ImageTest';
import BackgroundImageTest from './pages/BackgroundImageTest';
import DisplayTest from './pages/DisplayTest';
import DisplayNoneTest from './pages/DisplayNoneTest';
import AvatarTest from './pages/AvatarTest';
import BorderTest from './pages/BorderTest';
import PositionTest from './pages/PositionTest';
import OverlayTest from './pages/OverlayTest';

export default function App() {
  return (
    <main>
      <OverlayTest />
      <PositionTest />
      <BorderTest />
      <AvatarTest />
      <DisplayNoneTest />
      <DisplayTest />
      <BackgroundImageTest />
      <ImageTest />
      <MarginTest />
      <PaddingTest />
      <HeightTest />
      <ViewportTest />
      <DivTest />
    </main>
  );
}