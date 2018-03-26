import React, { Component } from 'react';

const CountdownTo = props => {
return (
  <div className="description">
  <h1 className="large-text">Countdown to {props.thing}!</h1>
</div>
)
}

export default CountdownTo;