/* eslint-disable import/prefer-default-export */
import checkPropTypes from "check-prop-types";

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
