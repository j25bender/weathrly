import React from 'react';
import { shallow, mount } from 'enzyme';
import CurrentWeather from "../lib/CurrentWeather";
import cleanData from '../lib/cleanData';
import mockData from '../lib/mockData';
import 'jest-localstorage-mock';

describe('CurrentWeather Tests ', () => {
    let filteredData;
    let wrapper;
    
    beforeEach(() => {
        filteredData = cleanData(mockData);
        wrapper = mount(<CurrentWeather forecast={filteredData.CurrentObject}/>);
    });

    it('CurrentWeather component should exist', () => {
        expect(wrapper).toBeDefined()
        expect(wrapper.find('.currentHeader').text()).toEqual('CURRENT WEATHER')        
    });

    it('CurrentWeather should be a function', () => {
        expect(typeof CurrentWeather).toEqual('function');
    });

    it('CurrentWeather should render 1 CurrentWeather component', () => {
        expect(wrapper.find('CurrentWeather').length).toEqual(1);
        expect(CurrentWeather).toMatchSnapshot();
    });
  
    it('CurrentWeather component should render a location, high / low temp, condition, current temp, day, a summary and an icon via an image url', () => {
        expect(wrapper.find('CurrentWeather').props().forecast.location).toEqual('Louisville, KY')

        expect(wrapper.find('CurrentWeather').props().forecast.condition).toEqual('Partly Cloudy')

        expect(wrapper.find('CurrentWeather').props().forecast.high).toEqual('51')

        expect(wrapper.find('CurrentWeather').props().forecast.low).toEqual('32')

        expect(wrapper.find('CurrentWeather').props().forecast.tempNum).toEqual(46)

        expect(wrapper.find('CurrentWeather').props().forecast.sentence).toEqual('Sun and clouds mixed. High 51F. Winds NE at 10 to 15 mph.')
        
        expect(wrapper.find('CurrentWeather').find('.weather-icon').length).toEqual(1);

        expect(wrapper.find('CurrentWeather').find('.weather-box').length).toEqual(3);
        
        expect(wrapper.find('CurrentWeather').props().forecast.icon).toEqual('http://icons.wxug.com/i/c/j/mostlycloudy.gif')
    });
});