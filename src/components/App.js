import React, { Component } from 'react';
import Clock from './Clock';
import Form from './Form';
import AnimalPic from './AnimalPic';
import CountdownTo from './CoundownTo';
// import CalcFriday from './CalcFriday';
import '../style.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      awesomeThing: 'Bert',
      date: '03/31/2018 19:30:00'
      // (new Date().getFullYear() + 1).toString()
    };
  }

  callback = state => {
    console.log('hello');
    this.setState({
      // destructuring?
      awesomeThing: state.awesomeThing,
      date: state.date
    });
  };

  render() {
    return (
      <div className="app">
        <div id="left-box">
          <div className="vert-center">
            <AnimalPic />
            <CountdownTo thing={this.state.awesomeThing} />
            <header className="app-header" id="clock">
              <Clock
                awesomeThing={this.state.awesomeThing}
                date={this.state.date}
              />
            </header>
          </div>
        </div>
        {/* <div id="right-box">
          <div className="vert-center">
            <div id="prompt" className="vert-center">
              How long 'til the next?
            </div>
            <Form callbackFromParent={this.callback} />
          </div>
        </div> */}
      </div>
    );
  }
}

export default App;
