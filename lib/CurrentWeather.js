import React, { Component } from 'react';
import '../styles/CurrentWeather.css';

function CurrentWeather(props) {
    return (
        <div className="current">
            <h2>Current Weather</h2>
            <div>{ props.forecast.location }</div>
            <div>{ props.forecast.day }</div>
            <div>Current Temperature { props.forecast.tempNum }˚F</div>
            <div>Expected High { props.forecast.high }˚F</div>
            <div>Expected Low { props.forecast.low }˚F</div>
            <div>{ props.forecast.sentence }</div>
            <div>{ props.forecast.condition }</div>
            <img className="weather-icon" src={ props.forecast.icon } />
        </div>
    )
}

export default CurrentWeather;