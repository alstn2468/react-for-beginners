import React, { Component } from "react";
import Number from "./Number";
import { Input, Form } from "./Input";

interface IState {
  counter: number;
  name: string;
}

class App extends Component<{}, IState> {
  state = {
    counter: 0,
    name: ""
  };

  render() {
    const { counter, name } = this.state;

    return (
      <div>
        <Form onFormSubmit={this.onFormSubmit}>
          <Input value={name} onChange={this.onChange} />
        </Form>
        <Number count={counter} />
        <button onClick={this.add}>Add</button>
      </div>
    );
  }

  onChange = (event: React.SyntheticEvent<HTMLInputElement>) => {
    console.log(event.target);
  };

  onFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();
  };

  add = () => {
    // this.setState({ counter: "hello" });
    // counter는 number이기 때문에 사용 불가

    this.setState(prev => {
      return { counter: prev.counter + 1 };
    });
  };
}

export default App;