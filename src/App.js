import React, { Component } from 'react';
import sloth from './sloth.gif';
import './App.css';
import Clock from './Clock';
import Input from './Input';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      awesomeThing: 'Christmas',
      date: '12/25/2018'
    };

    // this.handleSubmit = this.handleSubmit.bind(this);
    // this.handleChange = this.handleChange.bind(this);
  }

  // handleSubmit(event) {
  //   console.log('event.target.value', event.target);
  //   event.preventDefault();
  //   this.setState({ newEvent: this.state.event });
  //   event.preventDefault();
  // }

  // handleChange(event) {
  //   event.preventDefault();
  //   this.setState({ event: event.target.value });
  // }

  callback = (state) => {
    this.setState({
      awesomeThing: state.awesomeThing,
      date: state.date
    })
  }

  render() {
    console.log('DATE IN APP.JS STATE', this.state.date)
    return (
      <div className="App">
        <header className="app-header">
          <img src={sloth} id="sloth" alt="sloth" />
          <h1 className="app-title">Countdown to {this.state.awesomeThing}!</h1>
          <Clock date={this.state.date} />
        </header>
      <Input callbackFromParent={this.callback}/>
      </div>
    );
  }
}

export default App;

      //   <div className="app-intro form-group">
      //   <div class="input-group date" id="datetimepicker1"></div>
      //     <Clock date={this.state.date} />
      //     <form onSubmit={this.handleSubmit}>
      //       <label>
      //         Your awesome event name:
      //         <input
      //           type="text"
      //           name="event"
      //           value={this.state.event}
      //           onChange={this.handleChange}
      //         />
      //       </label>
      //       <input
      //         type="text"
      //         id="date"
      //         data-provide="datepicker" />
      //       <input type="submit" value="Submit" />
      //     </form>
      //     </div>
      //   </div>
      // </div>
//     );
//   }
// }

// export default App;
