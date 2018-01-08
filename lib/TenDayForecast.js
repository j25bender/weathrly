import React from 'react';
import TenDayCard from './TenDayCard.js';

function TenDayForecast (props) {
  return (
    <div className="cards">
        <div className="tenDayHeader">
            <h3>10 Day Forecast</h3>
        </div>
        <div className="card">
        {
            props.forecast.map( (card, index) => <TenDayCard key={index} data={card} /> )
        }
        </div>
    </div>
  )
}

export default TenDayForecast;