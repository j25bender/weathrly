import React from 'react';
import { shallow, mount } from 'enzyme';
import App from '../lib/App';
import cleanData from '../lib/cleanData';
import mockData from '../lib/mockData';
import 'jest-localstorage-mock';

describe('App Tests', () => {
  let filteredData;
  let wrapper;
  
  beforeEach(() => {
      filteredData = cleanData(mockData);
      wrapper = mount(<App />);
  });
  
  it('App should exist', () => {
    expect(wrapper).toBeDefined();
  });

  it('Should be a function', () => {
    expect(typeof wrapper.state).toEqual('function');
  });

  it('App should mount <Welcome />', () => {   
     expect(wrapper.find('h1').text()).toEqual('Welcome to Weathrly!');
     expect(App).toMatchSnapshot();
  });

  it('Should render Welcome component when it does not have any data in localStorage.', () => {
    global.localStorage.abc = null;
    const wrapper = mount(<App />);
    expect(wrapper.find('CurrentWeather').length).toEqual(0);
    expect(wrapper.find('Welcome').length).toEqual(1);
  });

  it('Should render the weather page when a city is specified', () => {  
    expect(wrapper.state()).toEqual({ CurrentWeather: {},                                                                                        SevenHourForecast: [],                                                                                     TenDayForecast: []
                                    })

    expect(wrapper.state().CurrentWeather.low).toBeUndefined();
    expect(wrapper.state().SevenHourForecast.length).toEqual(0);
    expect(wrapper.state().TenDayForecast.length).toEqual(0)
                                    
    wrapper.setState({CurrentWeather: filteredData.CurrentObject,
                      SevenHourForecast: filteredData.sevenHourForecastArray,
                      TenDayForecast: filteredData.tenDayArray
                     })
                        
    expect(wrapper.state().CurrentWeather.low).toEqual('32');
    expect(wrapper.state().SevenHourForecast.length).toEqual(7);
    expect(wrapper.state().TenDayForecast.length).toEqual(10);  

    expect(App).toMatchSnapshot();    
  });
});
