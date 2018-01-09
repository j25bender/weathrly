import React from 'react';
import { shallow, mount } from 'enzyme';
import SevenHourForecast from '../lib/SevenHourForecast';
import SevenHourCard from '../lib/SevenHourCard';
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
        expect(wrapper.find('SevenHourCard').length).toEqual(7);
        expect(SevenHourCard).toMatchSnapshot();
    });
  
    it('Each SevenHourCard component should render an hour, temp and an icon via an image url', () => {
        const firstCard = wrapper.find('SevenHourCard').first()
        const lastCard = wrapper.find('SevenHourCard').last()

        expect(firstCard.props().data.hour).toEqual('12:00 PM')
        expect(lastCard.props().data.hour).toEqual('6:00 PM')

        expect(firstCard.props().data.temp).toEqual('47')
        expect(lastCard.props().data.temp).toEqual('45')

        expect(wrapper.find('.weather-icon').length).toEqual(7);
        expect(firstCard.props().data.icon_url).toEqual('http://icons.wxug.com/i/c/k/partlycloudy.gif')
        expect(lastCard.props().data.icon_url).toEqual('http://icons.wxug.com/i/c/k/nt_clear.gif')
    });
});