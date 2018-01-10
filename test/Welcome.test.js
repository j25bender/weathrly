import React from 'react';
import { shallow, mount } from 'enzyme';
import Welcome from "../lib/Welcome";
import cleanData from '../lib/cleanData';
import mockData from '../lib/mockData';
import 'jest-localstorage-mock';

describe('Welcome Tests ', () => {
    let filteredData;
    let wrapper;
    
    beforeEach(() => {
        filteredData = cleanData(mockData);
        wrapper = mount(<Welcome />);        
    });

    it('Welcome component should exist', () => {
        expect(wrapper).toBeDefined()
        expect(wrapper.find('.welcomeText').text()).toEqual('Welcome to Weathrly!')        
    });

    it('Welcome should render 1 Welcome component', () => {        
        expect(wrapper.state().inputValue).toEqual('');
        localStorage.clear();
        expect(wrapper.find('Welcome').length).toEqual(1);
        localStorage.setItem('location', 'Denver, CO');
        console.log(wrapper.state().inputValue)
        expect(Welcome).toMatchSnapshot();
    });

    it('Should have a default state of suggestedCities set to an empty array', () => {
        expect( wrapper.state('suggestedCities') ).toEqual([]);
    });

    it('Should provide suggestions given input', () =>{
        const wrapper = mount(<Welcome />);
        const inputVal = {target: {value: "chicag"}};
        
        wrapper.find('input').simulate('change', inputVal);
        expect( wrapper.state('suggestedCities') ).toEqual(['chicago, il']);
    });
  
    it('Should call handleBtnClick when button is clicked', () => {
        const submitButton = wrapper.find('button')
        const inputValue = wrapper.find('input')

        wrapper.instance().handleBtnClick = jest.fn()
        
        inputValue.simulate('change', { target: { value: 'Denver, CO'}})
        submitButton.simulate('click')
        
        expect(wrapper.instance().handleBtnClick).toHaveBeenCalledTimes(1)

        inputValue.simulate('change', { target: { value: 'Boston, MA'}})
        submitButton.simulate('click')

        expect(wrapper.instance().handleBtnClick).toHaveBeenCalledTimes(2)
    });
});