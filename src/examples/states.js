// states can be used with useState hooks in functional
//  components and this.state in class components

import React, { Component } from 'react';

class Message extends Component {
  state = {
    msg: 'Welcome from states',
  };

  changeStateMsg() {
    this.setState({
      msg: 'Bye bye',
    });
  }

  render() {
    return (
      <div>
        <h1>{this.state.msg}</h1>
        <button onClick={() => this.changeStateMsg()}>subscribe</button>
      </div>
    );
  }
}

export default Message;
