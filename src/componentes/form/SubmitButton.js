import React from "react";
import PropTypes from "prop-types";
import "./SubmitButtonStyle.css";

function SubmitButton({ text }) {
  return (
    <div>
      <button className="btn">{text}</button>
    </div>
  );
}

SubmitButton.propTypes = {
  text: PropTypes.string.isRequired,
};

export default SubmitButton;
