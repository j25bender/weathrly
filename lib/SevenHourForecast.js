import React from 'react';
import SevenHourCard from './SevenHourCard.js';

function SevenHourForecast (props) {
  return (
    <div className="cards">
      <div className="sevenHourHeader">
        <h3>7 Hour Forecast</h3>
      </div>
      <div className="card">
      {
         props.forecast.map( (card, index) => <SevenHourCard key={index} data={card} /> )
      }
      </div>
    </div>
  )
}

export default SevenHourForecast;