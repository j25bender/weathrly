import React from 'react';
import TenDayCard from './TenDayCard.js';

function TenDayForecast (props) {
  return (
    <div>
    {
      props.forecast.map( (card, index) => <TenDayCard key={index} data={card} /> )
    }
    </div>
  )
}

export default TenDayForecast;