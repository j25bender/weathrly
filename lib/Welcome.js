import React from 'react';
import App from '../lib/App.js';
import '../styles/Welcome.css';

export default class Welcome extends React.Component {
    constructor () {
        super();

        this.state = {
            inputValue: '',
            CurrentWeather: {},
            SevenHourForecast: [],
            TenDayForecast: []
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleBtnClick = this.handleBtnClick.bind(this);
    }

    handleInputChange (e) {
        this.setState({
            inputValue: e.target.value
        })
    }

    handleBtnClick () {
        this.props.searchValue(this.state.inputValue);
        console.log(this.props.searchValue('Denver'))
    }

    render() {
        return (
            <div className="welcomeContainer">
                <div className="welcome">
                    <h4 className="welcomeText">Welcome to Weathrly!</h4>
                    <input id="searchInput" 
                           value={this.state.inputValue}
                           type="text"
                           onChange={this.handleInputChange}
                           autoFocus 
                    />
                    <button onClick={this.handleBtnClick}>Search by City or Zip</button>
                </div>
            </div>
        )
    }
}