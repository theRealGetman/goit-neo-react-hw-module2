import PropTypes from "prop-types";
import css from "./Options.module.css";

function Options({ total, onUpdateFeedback }) {
  return (
    <div className={css.options}>
      <button onClick={() => onUpdateFeedback("good")}>Good</button>
      <button onClick={() => onUpdateFeedback("neutral")}>Neutral</button>
      <button onClick={() => onUpdateFeedback("bad")}>Bad</button>
      {total > 0 && <button onClick={() => onUpdateFeedback("reset")}>Reset</button>}
    </div>
  );
}

Options.propTypes = {
  total: PropTypes.number,
  onUpdateFeedback: PropTypes.func,
}; 

export default Options;
