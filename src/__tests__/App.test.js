/* eslint-disable no-undef */
import React from "react";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import App from "../App";

Enzyme.configure({ adapter: new EnzymeAdapter() });

const setup = (props = {}) => {
  return shallow(<App props={props} />);
};

test("renders App component without an error", () => {
  const app = setup();
  expect(app.length).toBe(1);
});
