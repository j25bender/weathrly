import React from 'react';
import Card from './Card.js';

function TenDayForecast (props) {
  return (
    <div className="cards">
      <div className="tenDayHeader">
        <h3>10 Day Forecast</h3>
      </div>
      {
        props.forecast.map( (day, index) => <Card key={index} day={day} /> )
      }
    </div>
  );
}

export default TenDayForecast;