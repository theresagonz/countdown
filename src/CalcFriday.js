// import React, { Component } from 'react';

// export default class CalcFriday extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       nextFriday: '03-02-2018 17:00'
//     }
//   }
  
//   componentDidMount() {

  
//   const friday = '03-02-2018 17:00';
//   let fridayParsed = Date.parse(friday);
//   console.log(fridayParsed);
//   // get the next Friday at 5 p.m. local time
//   while (fridayParsed < Date.now()) {
//     fridayParsed += 7 * 24 * 60 * 60 * 1000;
//   }

//   this.props.getNextFridayCallback(fridayParsed);
// }
//   render() {
//     return null;
//   }
// }
