import React from 'react';
import Card from './Card.js';

function SevenHourForecast (props) {
  return (
    <div className="cards">
      <div className="sevenHourHeader">
        <h3>7 Hour Forecast</h3>
      </div>
      {
         props.forecast.map( (hour, index) => <Card key={index} hour={hour} /> )
      }
    </div>
  )
}

export default SevenHourForecast;