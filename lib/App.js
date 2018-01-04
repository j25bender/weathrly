import React from 'react';
import CurrentWeather from '../lib/CurrentWeather.js';
import Welcome from '../lib/Welcome.js';

 export default function App() {
    return (
        <div>
            <Welcome />
            <CurrentWeather />
        </div>
    )
 }