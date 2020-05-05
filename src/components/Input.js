import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { guessWord } from '../actions';
// class Input extends Component {
//   render() {
//     return <div />;
//   }
// }

// eslint-disable-next-line no-shadow
export function UnconnectedInput({ success, guessWord }) {
  const content = success ? null : (
    <form className='form'>
      <input
        data-test='input-box'
        className='mb-2 mx-sm-3'
        type='text'
        placeholde='enter guess'
      />
      <button
        data-test='submit-button'
        className='btn btn-primary'
        type='submit'
        onClick={() => guessWord()}
      >
        Guess
      </button>
    </form>
  );
  return <div data-test='component-input'>{content}</div>;
}

const mapStateToProps = ({ success }) => {
  return { success };
};

UnconnectedInput.propTypes = {
  success: PropTypes.bool.isRequired,
  guessWord: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, { guessWord })(UnconnectedInput);
