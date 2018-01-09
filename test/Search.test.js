import React from 'react';
import { shallow, mount } from 'enzyme';
import Search from "../lib/Search";
import cleanData from '../lib/cleanData';
import mockData from '../lib/mockData';
import 'jest-localstorage-mock';

describe('Search Tests ', () => {
    let filteredData;
    let wrapper;
    
    beforeEach(() => {
        filteredData = cleanData(mockData);
        wrapper = mount(<Search />);
    });

    it('Search component should exist', () => {
        expect(wrapper).toBeDefined()
        expect(wrapper.find('.welcomeText').text()).toEqual('Welcome to Weathrly!')        
    });

    it('Search should render 1 Search component', () => {
        expect(wrapper.find('Search').length).toEqual(1);
        expect(Search).toMatchSnapshot();
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

    // error handling add className div to error find it
});