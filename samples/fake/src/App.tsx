// import DirectionTest from "./pages/DirectionTest";
// import WrapTest from "./pages/WrapTest";
// import MinMaxTest from "./pages/MinMaxTest";
// import JustifyCenterTest from "./pages/JustifyCenterTest";
// import AlignTest from "./pages/AlignTest";
// import UserContainer from "./pages/UserContainer";
// import CardContainer from "./pages/CardContainer";
// import ButtonTest from "./pages/ButtonTest";
// import ModalTest from "./pages/ModalTest";
// import InputTest from "./pages/InputTest";

// export default function App() {
//   return (
//     <main>
//       {/* <CardContainer />
//       <UserContainer />
//       <AlignTest />
//       <JustifyCenterTest />
//       <MinMaxTest />
//       <WrapTest />
//       <DirectionTest /> */}
//       <ButtonTest />
//       <InputTest />
//       {/* <ModalTest /> */}
//     </main>
//   );
// }

import { Provider as ReduxProvider } from "react-redux";
import { useStore } from "./store";

import ReduxClock from "./pages/ReduxClock";
import UseReducerClock from "./pages/UseReducerClock";

export default function App() {
  const store = useStore();
  return (
    <ReduxProvider store={store}>
      <main className="p=8">
        <UseReducerClock />
        <ReduxClock />
      </main>
    </ReduxProvider>
  );
}
