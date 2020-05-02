/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr, storeFactory } from '../../test/testUtils';
import App from '../components/App';

/**
 * Factory function returning connected component
 * @function setup
 * @param {object} initialState
 * @returns {ShallowWrapper}
 */
const setupDive = (initialState = {}) => {
  const store = storeFactory(initialState);
  const wrapper = shallow(<App store={store} />)
    .dive()
    .dive();
  return wrapper;
};

const setupShallow = (initialState = {}) => {
  const store = storeFactory(initialState);
  const wrapper = shallow(<App store={store} />);
  return wrapper;
};

describe('app render', () => {
  test('renders App component without an error', () => {
    const wrapper = setupDive();
    const app = findByTestAttr(wrapper, 'app');
    expect(app.length).toBe(1);
  });
  test('renders title Jotto', () => {
    const wrapper = setupDive();
    const h1 = findByTestAttr(wrapper, 'app-title');
    expect(h1.text()).toBe('Jotto');
  });
});

describe('App component redux props', () => {
  test('App component has `success` piece of state', () => {
    const success = true;
    const wrapper = setupShallow({ success });
    const successProp = wrapper.props().children.props.success;
    expect(successProp).toBe(success);
  });
  test('App component has `secretWord` piece of state', () => {
    const secretWord = 'magic';
    const wrapper = setupShallow({ secretWord });
    const SWProp = wrapper.props().children.props.secretWord;
    expect(SWProp).toBe(secretWord);
  });
  test('App component has `guessedWords` piece of state', () => {
    const guessedWords = [
      { guessedWord: 'train', letterMatchCount: 3 },
      { guessedWord: 'agile', letterMatchCount: 1 },
      { guessedWord: 'party', letterMatchCount: 5 },
    ];
    const wrapper = setupShallow({ guessedWords });
    const GWProp = wrapper.props().children.props.guessedWords;
    expect(GWProp.length).toBe(guessedWords.length);
  });
  test('App component has `fetchAndSetSecretWord` in props', () => {
    const wrapper = setupShallow();
    const fetchFN = wrapper.props().children.props.fetchSecret;
    expect(fetchFN).toBeInstanceOf(Function);
  });
});
