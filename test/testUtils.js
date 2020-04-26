/* eslint-disable import/prefer-default-export */


/**
 * Returns an element with the given data attribute.
 * @param {ShallowWrapper} wrapper - Enzyne attruute wrapper.
 * @param {string} value - value of data-test attribute for search.
 * @returns {ShallowWrapper}
 */
export const findByTestAttr = (wrapper, value) => {
  return wrapper.find(`[data-test="${value}"]`);
}