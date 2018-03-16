## Synopsis

Weathrly is an application that supplies the user with real-time weather inforamtion in three separate formats; current weather, seven hour weather forecast and ten day forecast. This application utilizes the Weather Underground API.

## Installation
```
git clone https://github.com/j25bender/weathrly.git
npm install
npm start
```

## API Reference

You may purchase an API key from https://www.wunderground.com/weather/api/d/pricing.html 
The Developer plan is free and allows for 10 calls per minute. Other plans available.

Add the API key to the '../lib/weatherUndergroundAPIKey.js' file.
```
const key = 'Add-API-Key-Here';
```
## Tests
```
npm run test
```

## Contributors

Jeff Bender
