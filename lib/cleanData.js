function cleanData (data) {
  let apiData = data;
  let tenDayArray = apiData.forecast.simpleforecast.forecastday.map(day => {
    return {
      condition: day.conditions,
      date: day.date.pretty,
      day: day.date.weekday,
      high: day.high.fahrenheit,
      icon_url: day.icon_url,
      icon: day.icon,
      low: day.low.fahrenheit,
      maxHumid: day.maxhumidity,
      minHumid: day.minhumidity,
      maxWind: day.maxwind.mph,
      month: day.date.monthname_short,
      weekday: day.date.weekday,
      windDirection: day.maxwind.dir
    };
  });

  let CurrentObject = {
    observationTime: apiData.current_observation.observation_time,
    location: apiData.current_observation.display_location.full,
    day: apiData.forecast.simpleforecast.forecastday[0].date.weekday,
    condition: apiData.forecast.simpleforecast.forecastday[0].conditions,
    observationLoc: apiData.current_observation.observation_location.city,
    temp: apiData.current_observation.temperature_string,
    tempNum: apiData.current_observation.temp_f,
    windDir: apiData.current_observation.wind_dir,
    windSpeed: apiData.current_observation.wind_mph,
    windDegs: apiData.current_observation.wind_degrees,
    feelsLike: apiData.current_observation.feelslike_string,
    currWeather: apiData.current_observation.weather,
    high: tenDayArray[0].high,
    low: tenDayArray[0].low,
    sentence: apiData.forecast.txt_forecast.forecastday[0].fcttext,
    icon: apiData.current_observation.icon_url
  };
    
  let sevenHourForecastArray = apiData.hourly_forecast.map((hour) => {
    return {
      hour: hour.FCTTIME.civil,
      temp: hour.temp.english,
      condition: hour.condition,
      icon: hour.icon,
      icon_url: hour.icon_url,
      humidity: hour.humidity,
      windSpeed: hour.wspd.english,
      windDirection: hour.wdir.dir
    };
  }).slice(0, 7);

  return {tenDayArray, CurrentObject, sevenHourForecastArray};
}
module.exports = cleanData;