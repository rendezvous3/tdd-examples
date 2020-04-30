import { getLetterMatchCount } from "../helpers";

export const actionTypes = {
  CORRECT_GUESS: "CORRECT_GUESS",
  GUESS_WORD: "GUESS_WORD",
};

/**
 * @function correctGuess
 * @returns {object}
 */
export function correctGuess() {
  return {
    type: actionTypes.CORRECT_GUESS,
  };
}

/**
 * Returns Redux Thunk function that dispatches GUESS_WORD
 * action and (conditionaly) CORRECT_GUESS action
 * @function - guessWord
 * @param {string} - guessedWord
 * @returns {function} - Redux Thunk function.
 */
export const guessWord = (guessedWord) => {
  return function (dispatch, getState) {
    const { secretWord } = getState();
    const letterMatchCount = getLetterMatchCount(guessedWord, secretWord);

    dispatch({
      type: actionTypes.GUESS_WORD,
      payload: { guessedWord, letterMatchCount },
    });

    if (guessedWord === secretWord) {
      dispatch(correctGuess());
    }
  };
};
