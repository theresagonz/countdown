import React, { Component } from 'react';

export default class Input extends Component {
  constructor() {
    super();
    this.state = {
      awesomeThing: '',
      date: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleThingChange = this.handleThingChange.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value
    }, () => {
      this.props.callbackFromParent(this.state);
    });
    console.log(this.state)
  }

  handleThingChange(event) {
    console.log('return from input', event.target);
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleDateChange(event) {
    console.log('return from input', event.target);
    this.setState({
      [event.target.name]: event.target.value
    }, () => {
      console.log('NEW VALUE', this.state);
    });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-6">
            <div className="form-group">
              <form onSubmit={this.handleSubmit}>
                <label>
                  Your awesome event name:
                  <input
                    type="text"
                    name="awesomeThing"
                    value={this.state.event}
                    onChange={this.handleThingChange}
                  />
                </label>
                <div className="input-group date" id="date">
                  <input
                    type="text"
                    name="date"
                    value={this.state.date}
                    onBlur={this.handleDateChange}
                    className="form-control"
                  />
                  <span className="input-group-addon">
                    <span className="glyphicon glyphicon-calendar" />
                  </span>
                </div>
                <input type="submit" value="Submit" />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
