import React from 'react';
import { shallow, mount } from 'enzyme';
import SevenHourForecast from '../lib/SevenHourForecast';
import Card from '../lib/Card';
import cleanData from '../lib/cleanData';
import mockData from '../lib/mockData';
import 'jest-localstorage-mock';

describe('SevenHourForecast Tests ', () => {
    let filteredData;
    let wrapper;
    
    beforeEach(() => {
        filteredData = cleanData(mockData);
        wrapper = mount(<SevenHourForecast forecast={filteredData.sevenHourForecastArray}/>);
    });

    it('SevenHourForecast component should exist', () => {
        expect(wrapper).toBeDefined()
        expect(wrapper.find('h3').text()).toEqual('7 Hour Forecast')        
    });

    it('SevenHourForecast should be a function', () => {
        expect(typeof SevenHourForecast).toEqual('function');
    });

    it('SevenHourForecast should render 7 SevenHourCard components', () => {
        expect(wrapper.find('.sevenHourCard').length).toEqual(7);
        expect(SevenHourForecast).toMatchSnapshot();
    });

    it('should render hourly forcast information when hourly props are passed down', () => {
        // wrapper = mount(<Card key='0' hour={hour} />);
    
        expect(wrapper.find('h3').length).toEqual(1);
        expect(wrapper.find('img').length).toEqual(1);
        expect(wrapper.find('h4').length).toEqual(3);
    
        expect(wrapper.find('h3').text()).toEqual("Hour: 10:00 PM");
    });
  
    it('Each SevenHourCard component should render an hour, temp and an icon via an image url', () => {
        const firstCard = wrapper.find('.sevenHourCard').first()
        const lastCard = wrapper.find('.sevenHourCard').last()

        expect(firstCard.find('.hour').text()).toEqual('12:00 PM')
        expect(lastCard.find('.hour').text()).toEqual('6:00 PM')

        expect(firstCard.find('.temp').text()).toEqual('47˚F')
        expect(lastCard.find('.temp').text()).toEqual('45˚F')

        expect(wrapper.find('.weather-icon').length).toEqual(7);
    });
});