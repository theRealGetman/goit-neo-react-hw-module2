import React from "react";
import PropTypes from "prop-types";
import css from "./Description.module.css";

function Description(props) {
  return (
    <div className={css.description}>
      <h1>Sip Happens Café</h1>
      <p>
        Please leave your feedback about our service by selecting one of the
        options below.
      </p>
    </div>
  );
}

Description.propTypes = {};

export default Description;
