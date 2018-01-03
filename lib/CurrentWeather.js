import React, { Component } from 'react';
import '../styles/CurrentWeather.css';
import mockData from '../lib/mockData.js';

let currentCity = mockData.current_observation.display_location.city
let currentCondition = mockData.current_observation.weather
let currentDay = mockData.hourly_forecast[0].FCTTIME.weekday_name

// current temperature
// expected high and expected low for the day
// a summary of what the weather is going to be like that day (“Windy, chance of a few late night showers. Lows overnight in the mid 50s.)


export default class CurrentWeather extends Component {
    constructor() {
        super();
        this.state = { }
    }

    render () {
        return (
            <div className="current">
                <div>{ currentCity }</div>
                <div>{ currentCondition }</div>
                <div>{ currentDay }</div>
                <div>{ currentCity }</div>
                <div>{ currentCity }</div>
                <div>{ currentCity }</div>
                <div>{ currentCity }</div>
            </div>
        )
    }
}
