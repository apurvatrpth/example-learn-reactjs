//setState is a method not an object, where first object is the updated state
//and second function is the call back function

//calls to setState are async

// reacts may group multiple setstate calls in a single call

//when you have to update the state based on the previoud state,
//  make sure to pass a function and not the state directly

import React, { Component } from 'react';

export class setStateExample extends Component {
  state = {
    counter: 0,
  };

  changeState = () => {
    this.setState(
      {
        counter: this.state.counter + 1,
      },
      () => console.log(this.state.counter)
    );
  };

  render() {
    return (
      <div>
        <p>Counter {this.state.counter}</p>
        <button onClick={() => this.changeState()}>click</button>
      </div>
    );
  }
}

export default setStateExample;
