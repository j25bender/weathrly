import React from "react";
import { shallow, mount } from "enzyme";
import App from "../lib/App";
import cleanData from "../lib/cleanData";
import mockData from "../lib/mockData";
import localStorageMock from '../__mocks__/localStorage.js';

describe("App", () => {
  let app;

  beforeEach(() => {
    app = mount(<App />);
    window.localStorage = localStorageMock;  
    
    localStorageMock.setItem('location', '40201')
  });
  console.log(localStorageMock)
  
  it("App should exist", () => {
    expect(app).toBeDefined();
  });

  it("App should mount <Search />", () => {
    expect(app.find("Search")).toBeDefined();
    expect(app.find("Search").length).toEqual(1);
    expect(App).toMatchSnapshot();
  });

  it("should be a function", () => {
    expect(typeof app.state).toEqual("function");
  });

  it("should render the weather page when a city is specified", () => {
    let filteredData = cleanData(mockData)
    app.setState({
        CurrentWeather: filteredData.CurrentObject,
        SevenHourForecast: filteredData.sevenHourForecastArray,
        TenDayForecast: filteredData.tenDayArray
    })    

    expect(app.find("Search")).toBeDefined();
    expect(app.find("Search").length).toEqual(1);

    expect(app.find("CurrentWeather")).toBeDefined();
    expect(app.find("CurrentWeather").length).toEqual(1);

    // expect(app.find("TenHour")).toBeDefined();
    // expect(app.find("TenHour").length).toEqual(1);

    // expect(app.find("SevenDay")).toBeDefined();
    // expect(app.find("SevenDay").length).toEqual(1);

    // expect(App).toMatchSnapshot();    
  });
});
