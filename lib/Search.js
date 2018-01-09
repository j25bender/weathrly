import React from 'react';
import App from '../lib/App.js';
import '../styles/Search.css';
import autoData from '../lib/AutoCompleteData.js';
import { Trie } from '@j25bender/complete-me';

export default class Search extends React.Component {
    constructor () {
        super();
        this.trie = new Trie();
        this.trie.populate(autoData.data)

        this.state = {
            inputValue: ''
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
            </div>
        )
    }
}