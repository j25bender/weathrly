import React from 'react';
import { shallow, mount } from 'enzyme';
import TenDayForecast from '../lib/TenDayForecast';
import TenDayCard from '../lib/TenDayCard';
import cleanData from '../lib/cleanData';
import mockData from '../lib/mockData';
import 'jest-localstorage-mock';

describe('TenDayForecast Tests ', () => {
    let filteredData;
    let wrapper;
    
    beforeEach(() => {
        filteredData = cleanData(mockData);
        wrapper = mount(<TenDayForecast forecast={filteredData.tenDayArray}/>);
    });

    it('TenDayForecast component should exist', () => {
        expect(wrapper).toBeDefined()
        expect(wrapper.find('h3').text()).toEqual('10 Day Forecast')        
    });

    it('TenDayForecast should be a function', () => {
        expect(typeof TenDayForecast).toEqual('function');
    });

    it('TenDayForecast should render 10 TenDayCard components', () => {
        expect(wrapper.find('TenDayCard').length).toEqual(10);
        expect(TenDayCard).toMatchSnapshot();
    });
  
    it('Each TenDayCard component should render a day, high / low temp and an icon via an image url', () => {
        const firstCard = wrapper.find('TenDayCard').first()
        const lastCard = wrapper.find('TenDayCard').last()

        expect(firstCard.props().data.day).toEqual('Wednesday')
        expect(lastCard.props().data.day).toEqual('Friday')

        expect(firstCard.props().data.high).toEqual('51')
        expect(lastCard.props().data.high).toEqual('31')

        expect(firstCard.props().data.low).toEqual('32')
        expect(lastCard.props().data.low).toEqual('18')

        expect(wrapper.find('.weather-icon').length).toEqual(10);
        expect(firstCard.props().data.icon_url).toEqual('http://icons.wxug.com/i/c/k/partlycloudy.gif')
        expect(lastCard.props().data.icon_url).toEqual('http://icons.wxug.com/i/c/k/partlycloudy.gif')
    });
});