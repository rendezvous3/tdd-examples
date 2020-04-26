import React from "react";
import PropTypes from "prop-types";

/**
 * Functional Component for congragulatory message.
 * @function
 * @param {object} props
 * @returns {JSX.Element}
 */
function Congrats(props) {
  let content;
  if (props.sucess) {
    content = (
      <div data-test="component-congrats">
        <span data-test="congrats-message">
          Congratulations! You guessed the word!
        </span>
      </div>
    );
  } else {
    content = <div data-test="component-congrats" />;
  }
  return content;
}

Congrats.propTypes = {
  sucess: PropTypes.bool.isRequired,
};

export default Congrats;
