import PropTypes from "prop-types";
import css from "./Notification.module.css";

function Notification({ label }) {
  return <p className={css.notification}>{label}</p>;
}

Notification.propTypes = {
  label: PropTypes.string,
};

export default Notification;
