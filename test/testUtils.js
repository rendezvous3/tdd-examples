/* eslint-disable no-undef */
/* eslint-disable import/prefer-default-export */
import checkPropTypes from "check-prop-types";
import { createStore, applyMiddleware } from "redux";

import rootReducer from "../src/reducers";
import { middlewares } from "../src/configureStore";

/**
 * Create a testing store with imported reducers, middleware, and initial state/
 * @function - storeFactory
 * @param {object} - initialState
 * @returns {Store} - Redux store
 */
export const storeFactory = (initialState) => {
  const createStoreWithMiddleware = applyMiddleware(...middlewares)(
    createStore
  );
  return createStoreWithMiddleware(rootReducer, initialState);
};

/**
 * Returns an element with the given data attribute.
 * @param {ShallowWrapper} wrapper - Enzyne attruute wrapper.
 * @param {string} value - value of data-test attribute for search.
 * @returns {ShallowWrapper}
 */
export const findByTestAttr = (wrapper, value) => {
  return wrapper.find(`[data-test="${value}"]`);
};

/**
 * runs expect method on possible prop type warning
 * @param {JSX.Element} component
 * @param {object} conformingProps
 */
export const checkProps = (component, conformingProps) => {
  const propError = checkPropTypes(
    component.propTypes,
    conformingProps,
    "prop",
    component.name
  );
  expect(propError).toBeUndefined();
};
