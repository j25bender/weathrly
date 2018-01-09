import React from 'react';
import CurrentWeather from '../lib/CurrentWeather.js';
import SevenHourForecast from '../lib/SevenHourForecast.js';
import TenDayForecast from '../lib/TenDayForecast.js';
import Card from '../lib/Card.js';
import Welcome from '../lib/Welcome.js';
import Search from '../lib/Search.js';
import key from '../lib/weatherUndergroundAPIKey.js';
import cleanData from '../lib/cleanData.js';
import '../styles/App.css';


 export default class App extends React.Component {
    constructor() {
        super();

    this.state = {
        CurrentWeather: {},
        SevenHourForecast: [],
        TenDayForecast: []
    }
    this.fetchData = this.fetchData.bind(this);    
}

    render() {
        if(localStorage.getItem('location')) {
            return (
                <div>
                    <Welcome searchValue={this.fetchData} />
                    <CurrentWeather forecast={this.state.CurrentWeather}/>
                    <SevenHourForecast forecast={this.state.SevenHourForecast}/>
                    <TenDayForecast forecast={this.state.TenDayForecast}/>
                </div>
            )
        } else {
            return (
                <Search searchValue={this.fetchData} />                
            )
        }
    }

    testInput(value) {
        if (isNaN(value)) {
            value = value.split(", ");
            return `${value[1]}/${value[0]}`;
        } else {
            return value;
        }
    }

    componentDidMount() {
        let location = localStorage.getItem("location");
        if (location !== null) {
            this.fetchData(location)
        }
    }

    fetchData(inputValue) {
        this.testInput(inputValue);
        fetch(`http://api.wunderground.com/api/${key}/conditions/forecast10day/hourly/q/${inputValue}.json`)
        .then( response => response.json() )
        .then( json => {
            let filteredData = cleanData(json)
            this.setState({
                CurrentWeather: filteredData.CurrentObject,
                SevenHourForecast: filteredData.sevenHourForecastArray,
                TenDayForecast: filteredData.tenDayArray
            })
        }).catch();
    }
}