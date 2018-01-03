import React, { Component } from 'react';
import mockData, { response } from '../lib/mockData.js';

export default class CurrentWeather extends Component {
    constructor() {
        super();
        this.state = { }
    }

    render () {
        return (
            <div>
                Hello!
                { response.version }
            </div>
        )
    }
}
