import React, { Component } from 'react';
import '../styles/CurrentWeather.css';

function CurrentWeather(props) {
  const { location, icon, condition, day, high, low, tempNum, sentence } = props.forecast;
  return (
    <div className="current">
      <h2 className="currentHeader">Current Weather</h2>
      <div className="weather-box">
        <div>{ location }</div>
        <img className="weather-icon" src={ icon } />
        <div>{ condition }</div>
      </div>
      <div className="weather-box">
        <div>{ day }</div>
        <div className="hi">Expected High { high }˚F</div>
        <div className="low">Expected Low { low }˚F</div>
      </div>
      <div className="weather-box">
        <div className="current-temp">Current Temperature { tempNum }˚F</div>
        <div>{ sentence }</div>
      </div>
    </div>
  );
}

export default CurrentWeather;