import React from 'react';
import '../styles/CurrentWeather.css';
import PropTypes from "prop-types";

function CurrentWeather(props) {
  //eslint-disable-next-line max-len 
  const { location, icon, condition, day, high, low, tempNum, sentence } = props.forecast;

  return (
    <div className="current">
      <h2 className="currentHeader">CURRENT WEATHER</h2>
      <div className="weather-box" id="current-band">
        <div id="location">{ location }</div>
        <img className="weather-icon" src={ icon } />
        <div id="condition">{ condition }</div>
      </div>
      <div className="weather-box" id="day-hi-lo">
        <div id="day">{ day }</div>
        <div className="hi">Expected High { high }˚F</div>
        <div className="low">Expected Low { low }˚F</div>
      </div>
      <div className="weather-box" id="temp-sentence">
        <div className="current-temp">Current Temperature { tempNum }˚F</div>
        <div id="sentence">{ sentence }</div>
      </div>
    </div>
  );
}

CurrentWeather.propTypes = {
  forecast: PropTypes.object
};

export default CurrentWeather;