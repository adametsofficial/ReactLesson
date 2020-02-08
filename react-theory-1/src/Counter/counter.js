import React from "react";

export default class Counter extends React.Component {
  state = {
    counter: 0
  };

  addCounter = () => {
    this.setState(prevState => {
      return {
        counter: prevState.counter + 1
      };
    });
  };

  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <h2>Counter {this.state.counter}</h2>
        <button onClick={this.addCounter}>+</button>
        <button
          onClick={() =>
            this.setState({
              counter: this.state.counter === 0 ? 0 : this.state.counter - 1
            })
          }
        >
          -
        </button>
      </div>
    );
  }
}
