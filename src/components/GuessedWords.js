import React from "react";
import PropTypes from "prop-types";

const GuessedWords = ({ guessedWords }) => {
  let content;
  if (guessedWords.length === 0) {
    content = (
      <span data-test="guess-instructions">Try to guess the secret word!</span>
    );
  } else {
    content = (
      <div data-test="guessed-words">
        <h3>Guessed Words</h3>
        <table>
          <thead>
            <tr>
              <th>Guess</th>
              Matching Letters
            </tr>
          </thead>
          <tbody>
            {guessedWords.map((word, idx) => {
              return (
                <tr data-test="guessed-word" key={idx}>
                  <td>{word.guessWord}</td>
                  <td>{word.letterMatchCounter}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
  return <div data-test="component-guessed-words">{content}</div>;
};

GuessedWords.propTypes = {
  guessedWords: PropTypes.arrayOf(
    PropTypes.shape({
      guessedWord: PropTypes.string.isRequired,
      letterMatchCount: PropTypes.number.isRequired,
    })
  ).isRequired,
};

// GuessedWords.defaultProps = {
//   guessedWords: [],
// };

export default GuessedWords;
