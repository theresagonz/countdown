import React, { Component } from 'react';

export default class Clock extends Component {
  constructor(props) {
    super(props);

    this.state = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    };
  }

  getTimeUntil() {
    const date = this.props.date;
    // console.log('DATE', date)
    const time = Date.parse(date) - Date.now();
    // console.log('time', time);
    const seconds = Math.floor((time / 1000) % 60);
    const minutes = Math.floor((time / 1000 / 60) % 60);
    const hours = Math.floor((time / 1000 / 60 / 60) % 24);
    const days = Math.floor(time / 1000 / 60 / 60 / 24);
    this.setState({ days, hours, minutes, seconds });
  }

  componentDidMount() {
    setInterval(() => this.getTimeUntil(this.props.awesomeThing), 1000);
  }

  inFuture() {
    // if(!this.state.days) return "";

    const days = this.state.days !== 1 ? 'days ' : 'day ';
    const hours = this.state.hours !== 1 ? ' hours ' : ' hour ';
    const minutes = this.state.minutes !== 1 ? ' minutes ' : ' minute ';
    const seconds = this.state.seconds !== 1 ? ' seconds' : ' second';

    console.log(days);
    return (
      <div className="clock">
        {/* <div> */}
        <span className="number">{this.state.days} </span>
        <span className="label">{days}</span>
        <span className="number">{this.state.hours} </span>
        <span className="label">{hours}</span>
        <span className="number">{this.state.minutes} </span>
        <span className="label">{minutes}</span>
        <span className="number">{this.state.seconds} </span>
        <span className="label">{seconds}</span>
        {/* </div> */}
      </div>
    );
  }

  inPast() {
    return (
      <div className="clock">
        <div>
          <span className="number">{-this.state.days} </span>
          <span className="label">Days </span>
          <span className="number">{-this.state.hours} </span>
          <span className="label">Hours </span>
          <span className="number">{-this.state.minutes} </span>
          <span className="label">Minutes </span>
          <span className="number">{-this.state.seconds} </span>
          <span className="label">Seconds</span>
        </div>
        <div className="description clock">
          of {this.props.awesomeThing}
        </div>
      </div>
    );
  }

  render() {
    return Date.parse(this.props.date) - Date.now() > 0
      ? this.inFuture()
      : this.inPast();
  }
}
