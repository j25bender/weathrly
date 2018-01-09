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
        expect(wrapper.find('Welcome').length).toEqual(1);
        expect(Welcome).toMatchSnapshot();
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
//state change test
        expect(wrapper.instance().handleBtnClick).toHaveBeenCalledTimes(2)
    });
});