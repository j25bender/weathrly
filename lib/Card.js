import React, { Component } from 'react';
import '../styles/SevenHourCard.css';
import '../styles/TenDayCard.css';

export default class Card extends React.Component {
  constructor() {
    super();     
  }

  render () {
    return (
        
      <div className="card">
        {
          this.props.hour &&
                <div className="sevenHourCard">
                  <div className="hour">{ this.props.hour.hour }</div>
                  <div className="temp">{ this.props.hour.temp }˚F</div>
                  <img className="weather-icon" src={ this.props.hour.icon_url } />
                </div>
        }
            
        {
          this.props.day &&
                <div className="tenDayCard">
                  <div className="day">{ this.props.day.day }</div>
                  <div className="hi-lo">{ this.props.day.low }˚F / { this.props.day.high }˚F</div>
                  <img className="weather-icon" src={ this.props.day.icon_url } />
                </div>
        }
      </div>
    );
  }
}

