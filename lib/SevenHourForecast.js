import React from 'react';
import SevenHourCard from './SevenHourCard.js';

function SevenHourForecast (props) {
  return (
    <div>
    {
      props.forecast.map( (card, index) => <SevenHourCard key={index} data={card} /> )
    }
    </div>
  )
}

export default SevenHourForecast;