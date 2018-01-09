import React from 'react';
import App from '../lib/App.js';
import '../styles/Welcome.css';
import autoData from '../lib/AutoCompleteData.js';
import { Trie } from '@j25bender/complete-me';

export default class Welcome extends React.Component {
    constructor () {
        super();
        this.trie = new Trie();
        this.trie.populate(autoData.data)

        this.state = {
            inputValue: '',
            suggestedCities: []
        }
        
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleBtnClick = this.handleBtnClick.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);        
    }

    suggestCity (word) {
    let suggestions = this.trie.suggest(word);
        this.setState({
            suggestedCities: suggestions
        });
    }

    handleKeyPress(e) {
        if (e.key === 'Enter') {
            e.preventDefault();
            this.handleBtnClick();
        }
    }
    
    handleInputChange (e) {
        this.setState({
            inputValue: e.target.value
        })
        this.suggestCity(e.target.value);        
    }

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
            <div className="searchContainer">
                <div className="welcome-transition">
                    <div className="container">
                    <h1 className="welcomeText">Welcome to Weathrly!</h1>
                    <input id="searchInput" 
                           value={this.state.inputValue}
                           type="text"
                           onChange={this.handleInputChange}
                           onKeyPress={this.handleKeyPress}
                           list="dropDown"
                           autoFocus
                    />

                    <datalist id="dropDown">
                        {
                            this.state.suggestedCities.map( (city, i) => {
                            let capSuggestion = city.split(', ');
                            capSuggestion[1] = capSuggestion[1].toUpperCase();
                            capSuggestion[0] = capSuggestion[0].charAt(0).toUpperCase() + capSuggestion[0].slice(1);
                            capSuggestion = capSuggestion.join(', ')
                            return <option value={capSuggestion} key={i}/> }).slice(0, 5)
                        }
                    </datalist>
                    
                    <button onClick={this.handleBtnClick}>Search by City or Zip</button>
                    </div>
                </div>
            </div>
        )
    }
}