import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.state = { count: 5 };
    // method over-riding manually binding this with the handle decrement
    this.handleDecrement = this.handleDecrement.bind(this);
    this.handleIncrement = this.handleIncrement.bind(this);
  }

  // function declaration in class based in react

  handleDecrement() {
    console.log(this);
    // this.setState(...)
    this.setState((curState) => {
      return { count: curState.count - 1 };
    });
  }

  handleIncrement() {
    this.setState((curState) => {
      return { count: curState.count + 1 };
    });
  }

  render() {
    const date = new Date("June 21 2027");
    date.setDate(date.getDate() + this.state.count);
    return (
      <div>
        <button onClick={this.handleDecrement}>-</button>
        <span>
          {date.toDateString()} {` `}[{this.state.count}]
        </span>
        <button onClick={this.handleIncrement}>+</button>
      </div>
    );
  }
}

export default Counter;
