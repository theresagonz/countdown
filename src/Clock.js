import React, { Component } from "react";

export default class Clock extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // date: this.props.date,
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    };
    // console.log(this.props);
  }

  getTimeUntil(selDate) {
    const date = this.props.date;
    console.log('date', date)
    const time = Date.parse(date) - Date.now();
    if (time < 0) return;
    // const milliseconds = Math.floor(time % 1000);
    const seconds = Math.floor((time / 1000) % 60);
    const minutes = Math.floor((time / 1000 / 60) % 60);
    const hours = Math.floor((time / 1000 / 60 / 60) % 24);
    const days = Math.floor((time / 1000 / 60 / 60 / 24));
    // console.log(days, 'days', hours, 'hours', minutes, 'minutes', seconds, 'seconds');
    this.setState({ days, hours, minutes, seconds });
  }

  // componentWillMount() {
  //   this.getTimeUntil(this.state.event);
  // }

  componentDidMount() {
    setInterval(() => this.getTimeUntil(this.state.event), 1000);
  }

  render() {
    return (
      <div>
        <span className="number">{this.state.days} </span>
        <span className="label">Days </span>
        <span className="number">{this.state.hours} </span>
        <span className="label">Hours </span>
        <span className="number">{this.state.minutes} </span>
        <span className="label">Minutes </span>
        <span className="number">{this.state.seconds} </span>
        <span className="label">Seconds</span>
      </div>
    );
  }
}

// return this.getTimeUntil(this.state.bert) < 0 ? <BertsNotHere /> : <BertsHere />

// const BertsHere = () => {
//     return (
//         <h1>Bert's here!</h1>
//     )
//   };

// const BertsNotHere = () => {
// }
