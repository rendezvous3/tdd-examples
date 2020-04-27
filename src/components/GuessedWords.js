import React from "react";
import PropTypes from "prop-types";

const GuessedWords = (props) => {
  const { guessedWords } = props;
  return <div />;
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
