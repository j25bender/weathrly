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

  it('App should mount <Search />', () => {
    expect(wrapper.find('Search')).toBeDefined();
    expect(wrapper.find('Search').length).toEqual(1);
    expect(App).toMatchSnapshot();
  });

  it('Should be a function', () => {
    expect(typeof wrapper.state).toEqual('function');
  });


// check if no data welcome page else show app

  it('Should render the weather page when a city is specified', () => {  
    expect(wrapper.state()).toEqual({ CurrentWeather: {},                                                SevenHourForecast: [],                                             TenDayForecast: []
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
