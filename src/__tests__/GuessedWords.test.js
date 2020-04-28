/* eslint-disable no-undef */
import React from "react";
import { shallow, ShallowWrapper } from "enzyme";
import { findByTestAttr, checkProps } from "../../test/testUtils";
import GuessedWords from "../components/GuessedWords";

const defaultProps = {
  guessedWords: [{ guessedWord: "train", letterMatchCount: 3 }],
};

/**
 * Factory function creating ShallowWrapper for GuessWords
 * @function setup
 * @param {object} props - Component props
 * @returns {ShallowWrapper}
 */

const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  // eslint-disable-next-line react/jsx-props-no-spreading
  return shallow(<GuessedWords {...setupProps} />);
};

test("does not throw warning with expected props", () => {
  checkProps(GuessedWords, defaultProps);
});

describe("if there are no words guessed", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup({ guessedWords: [] });
  });
  test("renders without an error", () => {
    const component = findByTestAttr(wrapper, "component-guessed-words");
    expect(component.length).toBe(1);
  });
  test("renders instructions to guess a word", () => {
    const instructions = findByTestAttr(wrapper, "guess-instructions");
    expect(instructions.text().length).not.toBe(0);
  });
});

describe("if there are words guessed", () => {
  let wrapper;
  const guessedWords = [
    { guessedWord: "train", letterMatchCount: 3 },
    { guessedWord: "agile", letterMatchCount: 1 },
    { guessedWord: "party", letterMatchCount: 5 },
  ];
  beforeEach(() => {
    wrapper = setup({ guessedWords });
  });
  test("renders without an error", () => {
    const component = setup({ guessedWords });
    expect(component.length).toBe(1);
  });
  test("renders `guessed words` section", () => {
    const guessedWordsElement = findByTestAttr(wrapper, "guessed-words");
    expect(guessedWordsElement.length).toBe(1);
  });
  test("correct number of guessed words", () => {
    const guessedWordsElements = findByTestAttr(wrapper, "guessed-word");
    expect(guessedWordsElements.length).toBe(guessedWords.length);
  });
});
