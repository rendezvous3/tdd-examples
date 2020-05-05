import React, { Component } from 'react';
import './css/App.css';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import GuessedWords from './GuessedWords';
import Congrats from './Congrats';
import Input from './Input';
import { fetchAndSetSecretWord } from '../actions';

export class UnconnectedApp extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const { getSecretWord } = this.props;
    getSecretWord();
  }

  render() {
    const { success, secretWord, guessedWords, fetchSecret } = this.props;
    return (
      <div data-test='app' className='container'>
        <h1 data-test='app-title'>Jotto</h1>
        <Congrats success={success} />
        <Input />
        <GuessedWords guessedWords={guessedWords} />
      </div>
    );
  }
}

export function uncApp({ success, secretWord, guessedWords, fetchSecret }) {
  React.useEffect(() => {
    fetchSecret();
  }, []);

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

uncApp.propTypes = {
  success: PropTypes.bool.isRequired,
  secretWord: PropTypes.string.isRequired,
  guessedWords: PropTypes.array.isRequired,
};

UnconnectedApp.propTypes = {
  success: PropTypes.bool.isRequired,
  secretWord: PropTypes.string.isRequired,
  guessedWords: PropTypes.array.isRequired,
  getSecretWord: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, { fetchSecret: fetchAndSetSecretWord })(
  uncApp
);
