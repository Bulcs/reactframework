import PropTypes from "prop-types";
import "./style.css";

export default function Buttons(props) {
  const options = props.options.map((option, index) => (
    <button key={option} className={"m5"} onClick={() => props.onVote(index)}>
      {option}
    </button>
  ));

  return <div>{options}</div>;
}

Buttons.propTypes = {
  onVote: PropTypes.func,
  options: PropTypes.array,
};
