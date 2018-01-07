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

    // componentDidMount() {
    //     this.emptyStorageCheck();
        
    // }

    // emptyStorageCheck() {
    //     console.log('emptyStorage?', this.props.emptyStorage)
    //     console.log(document.getElementsByClassName('welcome'))
    //     console.log(document.getElementsByClassName('welcome-transition'))
        
    //    if(this.props.emptyStorage) {
    //     document.getElementsByClassName('welcome')[0].className = 'welcome-transition'
    //     document.getElementsByClassName('welcome-transition')[0].classList.remove('welcome')
        
    //     } else if (!this.props.emptyStorage) {
    //         console.log(document.getElementsByClassName('welcome')[0].className)
    //         document.getElementsByClassName('welcome-transition')[0].classList.add('welcome')
    //     }
    // }

    handleBtnClick () {
        if(isNaN(this.state.inputValue) 
            && autoData.data.includes(this.state.inputValue) 
            || this.state.inputValue.length === 5 && !isNaN(this.state.inputValue)) {

            this.props.searchValue(this.state.inputValue);
            this.setState({ inputValue: this.state.inputValue });
            localStorage.setItem('location', this.state.inputValue);
        } else { 
            alert('Invalid Input:\n\nPlease Enter City, State OR Zip Code\n\ne.g. Denver, CO OR 80202');
            this.setState({ inputValue: '' });
            document.getElementById('searchInput').focus();
        }       
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