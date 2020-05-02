import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { guessWord } from '../actions';
// class Input extends Component {
//   render() {
//     return <div />;
//   }
// }

function Input({ success }) {
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

Input.propTypes = {
  success: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps, { guessWord })(Input);
