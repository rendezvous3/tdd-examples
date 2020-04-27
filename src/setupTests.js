/* eslint-disable import/no-extraneous-dependencies */
// runing before each test setup file
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new EnzymeAdapter() });