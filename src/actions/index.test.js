/* eslint-disable no-undef */
import { correctGuess, actionTypes } from "./";

describe("correctGuess", () => {
  test("returns an action with type `CORRECT_GUESS`", () => {
    const action = correctGuess();
    // toEqual is deep equality test
    expect(action).toEqual({ type: actionTypes.CORRECT_GUESS });
  });
});
