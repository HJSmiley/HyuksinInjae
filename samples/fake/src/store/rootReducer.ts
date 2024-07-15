// import { Action } from "redux";
import { AppState } from "./AppState";
import { Actions } from "./actions";

const initialAppState = {
  today: new Date(),
};

export const rootReducer = (
  // prevState: AppState = initialAppState,
  // action: Action
  state: AppState = initialAppState,
  action: Actions
) => {
  // const newState = { ...prevState };
  // return newState;
  switch (action.type) {
    case "setToday": {
      return { ...state, today: action.today };
    }
  }

  return state;
};
