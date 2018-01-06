import React from 'react';
import App from '../lib/App.js';
import '../styles/Welcome.css';
import autoData from '../lib/AutoCompleteData.js';

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
        if(isNaN(this.state.inputValue) 
            && autoData.data.includes(this.state.inputValue) 
            || this.state.inputValue.length === 5 && !isNaN(this.state.inputValue)) {

            this.props.searchValue(this.state.inputValue);
            this.setState({inputValue: this.state.inputValue})
            localStorage.setItem("location", this.state.inputValue);
        } else { alert('Invalid Input: Please Enter City, State OR Zip Code e.g. Denver, CO OR 80202')}       
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