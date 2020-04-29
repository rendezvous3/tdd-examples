import React, { Component } from "react";
import { connect } from "react-redux";

// class Input extends Component {
//   render() {
//     return <div />;
//   }
// }

function Input({ success }) {
  const content = success ? null : (
    <form className="form-inline">
      <input
        data-test="input-box"
        className="mb-2 mx-sm-3"
        type="text"
        placeholde="enter guess"
      />
      <button
        data-test="submit-button"
        className="btn btn-primary"
        type="submit"
      >
        Guess
      </button>
    </form>
  );
  return <div data-test="component-input">{content}</div>;
}

const mapStateToProps = ({ success }) => {
  return { success };
};

export default connect(mapStateToProps)(Input);
