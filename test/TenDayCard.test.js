import React from 'react';
import { shallow, mount } from 'enzyme';
import TenDayForecast from '../lib/TenDayForecast';
import Card from '../lib/Card';
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
        expect(wrapper.find('h3').text()).toEqual('10 DAY FORECAST')        
    });

    it('TenDayForecast should be a function', () => {
        expect(typeof TenDayForecast).toEqual('function');
    });

    it('TenDayForecast should render 10 TenDayCard components', () => {
        expect(wrapper.find('.tenDayCard').length).toEqual(10);
        expect(TenDayForecast).toMatchSnapshot();
    });
  
    it('Each TenDayCard component should render a day, high / low temp and an icon via an image url', () => {
        const firstCard = wrapper.find('.tenDayCard').first()
        const lastCard = wrapper.find('.tenDayCard').last()

        expect(firstCard.props().children[0].props.children).toEqual('Wednesday')
        expect(lastCard.props().children[0].props.children).toEqual('Friday')

        expect(firstCard.find('.day').text()).toEqual('Wednesday')
        expect(lastCard.find('.day').text()).toEqual('Friday')

        expect(firstCard.find('.hi-lo').text()).toEqual('32˚F / 51˚F')
        expect(lastCard.find('.hi-lo').text()).toEqual('18˚F / 31˚F')

        expect(wrapper.find('.weather-icon').length).toEqual(10);
    });
});