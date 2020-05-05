/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr, storeFactory } from '../../test/testUtils';
import Input, { UnconnectedInput } from '../components/Input';

/**
 * @function - setup
 * @param {object} - initialState
 * @returns {ShallowWrapper}
 */
const setup = (initialState = {}) => {
  const store = storeFactory(initialState);
  const wrapper = shallow(<Input store={store} />)
    .dive()
    .dive();
  // console.log(wrapper.debug());
  return wrapper;
};

/**
 * @function - setup
 * @param {object} - initialState
 * @returns {ShallowWrapper}
 */
const setupInputShallow = (initialState = {}) => {
  const store = storeFactory(initialState);
  const wrapper = shallow(<Input store={store} />);
  return wrapper;
};

setup();

describe('render', () => {
  describe('word has not been guessed', () => {
    let wrapper;
    beforeEach(() => {
      const initialState = { success: false };
      wrapper = setup(initialState);
    });
    test('renders component without an error', () => {
      const component = findByTestAttr(wrapper, 'component-input');
      expect(component.length).toBe(1);
    });
    test('renders input box', () => {
      const component = findByTestAttr(wrapper, 'input-box');
      expect(component.length).toBe(1);
    });
    test('renders submit button', () => {
      const component = findByTestAttr(wrapper, 'submit-button');
      expect(component.length).toBe(1);
    });
  });
  describe('word has been guessed', () => {
    let wrapper;
    beforeEach(() => {
      wrapper = setup({ success: true });
    });
    test('renders without an error', () => {
      const component = findByTestAttr(wrapper, 'component-input');
      expect(component.length).toBe(1);
    });
    test('does not render input box', () => {
      const inputBox = findByTestAttr(wrapper, 'input-box');
      expect(inputBox.length).toBe(0);
    });
    test('does not render submit button', () => {
      const submitBTN = findByTestAttr(wrapper, 'submit-button');
      expect(submitBTN.length).toBe(0);
    });
  });
});
describe('redux props', () => {
  test('has success piece of state as a prop', () => {
    const success = true;
    // const store = storeFactory({ success });
    // const componentProps = shallow(<Input store={store} />).props().children
    //   .props;
    const wrapper = setupInputShallow({ success });
    const componentProps = wrapper.props().children.props;
    const successProp = componentProps.success;
    expect(successProp).toBe(success);
    // const wrapper = setup({ success });
    // const inputBox = findByTestAttr(wrapper, "input-box");
    // expect(inputBox.length).toBe(0);

    // wrapper .instance() only works on class components
    // const successProp = wrapper.instance().props.success;
    // expect(successProp).toBe(false);
  });

  test('`guessWord action creator` is a function prop', () => {
    const wrapper = setupInputShallow();
    const guessWordProp = wrapper.props().children.props.guessWord;
    expect(guessWordProp).toBeInstanceOf(Function);
  });
});

describe('guessWord on Submit Click test', () => {
  let defaultProps;
  let wrapper;
  const guessedWord = 'train';
  beforeEach(() => {
    defaultProps = {
      success: false,
      guessWord: jest.fn(),
    };
    wrapper = shallow(<UnconnectedInput {...defaultProps} />);
    wrapper.setState({ currentGuess: guessedWord });
    const button = findByTestAttr(wrapper, 'submit-button');
    button.simulate('click', { preventDefault() {} });
  });
  test('action `guessWord` called when submit btn clicked', () => {
    const guessWordMockCallCount = defaultProps.guessWord.mock.calls.length;
    expect(guessWordMockCallCount).toBe(1);
  });
  test('calls `guessWord` with input values as argument', () => {
    const guessWordArg = defaultProps.guessWord.mock.calls[0][0];
    expect(guessWordArg).toBe(guessedWord);
  });
  test('input box clears on submit', () => {
    expect(wrapper.state('currentGuess')).toBe('');
  })
});
