import React, { Component } from "react";
import sloth from "./sloth.gif";
import "./App.css";
import Clock from "./Clock";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={sloth} id="sloth" alt="sloth" />
          <h1 className="App-title">Countdown to Bert!</h1>   
        </header>
        <d className="App-intro">
          <Clock />
        </d>
      </div>
    );
  }
}

export default App;
