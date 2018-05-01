import React from 'react';
import Card from './Card.js';
import PropTypes from "prop-types";

function SevenHourForecast (props) {
  return (
    <div className="cards">
      <div className="sevenHourHeader">
        <h3>7 HOUR FORECAST</h3>
      </div>
      {
        props.forecast.map( (hour, index) => <Card key={index} hour={hour} /> )
      }
    </div>
  );
}

export default SevenHourForecast;