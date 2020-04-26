import React from "react";

/**
 * Functional Component for congragulatory message.
 * @function
 * @param {object} props
 * @returns {JSX.Element}
 */
export default (props) => {
  let content;
  if (props.success) {
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
};
