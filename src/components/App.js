import React from 'react';
import './css/App.css';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import GuessedWords from './GuessedWords';
import Congrats from './Congrats';
import Input from './Input';
import { fetchAndSetSecretWord } from '../actions';

function App({ success, secretWord, guessedWords, fetchSecret }) {
  return (
    <div data-test='app' className='container'>
      <h1 data-test='app-title'>Jotto</h1>
      <Congrats success={success} />
      <Input />
      <GuessedWords guessedWords={guessedWords} />
    </div>
  );
}

const mapStateToProps = (state) => {
  const { success, guessedWords, secretWord } = state;
  return {
    success,
    secretWord,
    guessedWords,
  };
};

App.propTypes = {
  success: PropTypes.bool.isRequired,
  secretWord: PropTypes.string.isRequired,
  guessedWords: PropTypes.array.isRequired,
};

export default connect(mapStateToProps, { fetchSecret: fetchAndSetSecretWord })(
  App
);
