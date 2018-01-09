import React, { Component } from 'react';
import '../styles/CurrentWeather.css';

function CurrentWeather(props) {

  // const { location, icon, condition, etc } = props.forecast;
  return (
    <div className="current">
      <h2 className="currentHeader">Current Weather</h2>
      <div className="weather-box">
        <div>{ props.forecast.location }</div>
        <img className="weather-icon" src={ props.forecast.icon } />
        <div>{ props.forecast.condition }</div>
      </div>
      <div className="weather-box">
        <div>{ props.forecast.day }</div>
        <div className="hi">Expected High { props.forecast.high }˚F</div>
        <div className="low">Expected Low { props.forecast.low }˚F</div>
      </div>
      <div className="weather-box">
        <div className="current-temp">Current Temperature { props.forecast.tempNum }˚F</div>
        <div>{ props.forecast.sentence }</div>
      </div>
    </div>
  );
}

export default CurrentWeather;