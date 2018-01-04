import React, { Component } from 'react';
import '../styles/CurrentWeather.css';
import mockData from '../lib/mockData.js';

let currentCity = mockData.current_observation.display_location.city
let currentCondition = mockData.current_observation.weather
let currentDay = mockData.hourly_forecast[0].FCTTIME.weekday_name
let currentTemp = mockData.current_observation.temp_f
let expectedHighTemp = mockData.forecast.simpleforecast.forecastday[0].high.fahrenheit
let expectedLowTemp = mockData.forecast.simpleforecast.forecastday[0].low.fahrenheit
let currentSummary = mockData.forecast.txt_forecast.forecastday[4].fcttext

export default class CurrentWeather extends Component {
    constructor() {
        super();
        this.state = { 
        
        }
    }

    render () {
        return (
            <div className="current">
                <h2>Current Weather</h2>
                <div>{ currentCity }</div>
                <div>{ currentCondition }</div>
                <div>{ currentDay }</div>
                <div>Current Temperature { currentTemp }˚F</div>
                <div>Expected High { expectedHighTemp }˚F</div>
                <div>Expected Low { expectedLowTemp }˚F</div>
                <div>{ currentSummary }</div>
            </div>
        )
    }
}
