import { stat } from "fs";
import React from "react";

interface GreetingProps {
  name?: string;
}

interface GreetingState {
  message: string;
}

export default class Greeting extends React.Component<
  GreetingProps,
  GreetingState
> {
  constructor(props: GreetingProps) {
    super(props);
    this.state = {
      message: `Hello from, ${props.name}`,
    };
  }

  static getDerivedStateFromProps(props: GreetingProps, state: GreetingState) {
    console.log(props, state);
    if (props.name && props.name !== state.message) {  // undefined가 아닐 때
      const newState = { ...state };
      newState.message = Greeting.getNewMessage(props.name);
      return newState;
    }
    return state;
  }

  static getNewMessage(name: string): string {
    return `Hello from, ${name}`;
  }

  render() {
    if (!this.props.name) {
      return <div>no name given</div>;
    }

    return <div>{this.state.message}</div>;
  }
}
