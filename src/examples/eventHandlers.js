// to avoid binding of 'this' to eventhandlers, always use arrow functions by default

import React, { Component } from 'react';

export class EventHandlers extends Component {
  constructor(props) {
    super(props);

    this.state = {
      msg: 'I love india',
    };

    this.change = this.change.bind(this); // binding this to 'change' (the event handler) method
  }

  // next method will return : TypeError: Cannot read property 'setState' of undefined
  // to make this work, you need to bind 'this' to eventHandler
  change() {
    this.setState({
      msg: 'Pakistan sucks',
    });
  }

  // next method will work totally fine even without binding

  change2 = () => {
    this.setState({
      msg: 'India rocks',
    });
  };

  render() {
    return (
      <div>
        <p>{this.state.msg}</p>
        <button onClick={this.change}>click me</button>
        <br />
        <br />
        <button onClick={this.change2}>click me 2</button>
      </div>
    );
  }
}

export default EventHandlers;
