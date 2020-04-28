/* eslint-disable import/prefer-default-export */
/**
 * @method getLetterMatchCount
 * @param {string} guessWord
 * @param {string} secretWord
 * @returns {number}
 */
export function getLetterMatchCount(guessedWord, secretWord) {
  const secretLetterSet = new Set(secretWord.split(""));
  const guessedLetterSet = new Set(guessedWord.split(""));
  return [...secretLetterSet].filter((letter) => guessedLetterSet.has(letter))
    .length;
}
