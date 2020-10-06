import React, { Component } from 'react';
import './App.css';
import Greet from './components/greet';
import Welcome from './components/welcome';
import JsxWithAndWithout from './components/jsx';
import PropExample from './examples/props';
import Message from './examples/states';
import SetStateExample from './examples/setStateExample';
import ReactGroupsMultipleCalls from './examples/reactGroupsMultipleCalls';
import EventHandlers from './examples/eventHandlers';

const { JsxExample, NonJsxExample } = JsxWithAndWithout;

class App extends Component {
  render() {
    return (
      <div className='App'>
        {/* <Greet />
        <Welcome />
        <JsxExample />
        <NonJsxExample /> */}
        {/* <PropExample name='rocky'>
          <p>this is children prop, can be accessed through props.children</p>
        </PropExample>

        <PropExample name='supe'>
          <button>click</button>
        </PropExample> */}
        {/* <Message /> */}
        {/* <SetStateExample /> */}
        {/* <ReactGroupsMultipleCalls /> */}
        <EventHandlers />
      </div>
    );
  }
}

export default App;
