/* eslint-disable no-undef */
import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';

import { findByTestAttr, storeFactory } from '../../test/testUtils';
import Input from '../components/Input';


/**
 * @function - setup
 * @param {object} - initialState
 * @returns {ShallowWrapper}
 */
const setup = (initialState={}) => {
  const store = storeFactory(initialState);
  const wrapper = shallow(<Input store={store} />).dive().dive();
  console.log(wrapper.debug());
}

setup();

describe("render", () => {
  describe("word has not been guessed", () => {
    test("renders without an error", () => {

    });
    test("renders input box", () => {

    });
    test("renders submit button", () => {

    });
  });
  describe("word has not been guessed", () => {
    test("renders without an error", () => {

    });
    test("does not render input box", () => {

    });
    test("does not render submit button", () => {

    });
  });
});
describe("update state", () => {

});
