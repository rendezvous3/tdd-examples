import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { guessWord } from '../actions';
// class Input extends Component {
//   render() {
//     return <div />;
//   }
// }

// eslint-disable-next-line no-shadow
export class UnconnectedInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentGuess: '',
    };

    this.submitGuessedWord = this.submitGuessedWord.bind(this);
  }

  submitGuessedWord(event) {
    event.preventDefault();
    const { currentGuess } = this.state;
    // eslint-disable-next-line no-shadow
    const { guessWord } = this.props;
    guessWord(currentGuess);
    this.setState({ currentGuess: '' });
  }

  render() {
    const { success } = this.props;
    const { currentGuess } = this.state;
    const content = success ? null : (
      <form className='form'>
        <input
          data-test='input-box'
          className='mb-2 mx-sm-3'
          type='text'
          placeholde='enter guess'
          onChange={(e) => this.setState({ currentGuess: e.target.value })}
        />
        <button
          data-test='submit-button'
          className='btn btn-primary'
          type='submit'
          onClick={this.submitGuessedWord}
        >
          Guess
        </button>
      </form>
    );
    return <div data-test='component-input'>{content}</div>;
  }
}

const mapStateToProps = ({ success }) => {
  return { success };
};

UnconnectedInput.propTypes = {
  success: PropTypes.bool.isRequired,
  guessWord: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, { guessWord })(UnconnectedInput);
