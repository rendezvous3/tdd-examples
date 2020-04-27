/* eslint-disable no-undef */
import React from "react";
import { shallow } from "enzyme";

import { findByTestAttr, checkProps } from "../../test/testUtils";
import Congrats from "../Congrats";

const defaultProps = { sucess: false };

/**
 * Factory function to create a ShallowWrapper for the Congrats component.
 * @function setup
 * @param {object} props
 * @returns {ShallowWrapper}
 */
const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  // eslint-disable-next-line react/jsx-props-no-spreading
  return shallow(<Congrats {...setupProps} />);
};

test("renders without an error", () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, "component-congrats");
  expect(component.length).toBe(1);
});

test("renders no text when `sucess` prop is false", () => {
  const wrapper = setup({ sucess: false });
  const component = findByTestAttr(wrapper, "component-congrats");
  expect(component.text()).toBe("");
});

test("renders non-empty contrats message when cusses prop is true", () => {
  const wrapper = setup({ sucess: true });
  const message = findByTestAttr(wrapper, "congrats-message");
  expect(message.text().length).not.toBe(0);
});

test("does not throw warning with expected props", () => {
  const expectedProps = { sucess: false };
  checkProps(Congrats, expectedProps);
  // const propError = checkPropTypes(
  //   Congrats.propTypes,
  //   expectedProps,
  //   "prop",
  //   Congrats.name
  // );
  // expect(propError).toBeUndefined();
});
