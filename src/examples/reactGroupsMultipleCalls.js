//when you have to update the state based on the previoud state,
//  make sure to pass a function and not the state directly

//use prevState

import React, { Component } from 'react';

export class reactGroupsMultipleCalls extends Component {
  state = {
    count: 0,
  };

  increment = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  incrementFive = () => {
    this.increment();
    this.increment();
    this.increment();
    this.increment();
    this.increment();
  };

  incrementByPrevState = () => {
    this.setState((prevState, props) => ({
      count: prevState.count + 1,
    }));
  };

  incrementByFive = () => {
    this.incrementByPrevState();
    this.incrementByPrevState();
    this.incrementByPrevState();
    this.incrementByPrevState();
    this.incrementByPrevState();
  };

  render() {
    return (
      <div>
        <p>Counter(1) - {this.state.count}</p>
        <button onClick={() => this.incrementFive()}>
          click me to increase count by 5
        </button>
        {/* this will not give final output as 5 but as 1, because react groups all similar calls to setstate */}
        <p>Counter(2) - {this.state.count}</p>
        <button onClick={() => this.incrementByFive()}>
          click me to increase count by 5
        </button>
      </div>
    );
  }
}

export default reactGroupsMultipleCalls;
