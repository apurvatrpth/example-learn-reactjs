import React, { Component } from "react";
import "./App.css";
import Greet from "./components/greet";
import Welcome from "./components/welcome";
import JsxWithAndWithout from "./components/jsx";

const { JsxExample, NonJsxExample } = JsxWithAndWithout;

class App extends Component {
  render() {
    return (
      <div className="App">
        <Greet />
        <Welcome />
        <JsxExample />
        <NonJsxExample />
      </div>
    );
  }
}

export default App;
