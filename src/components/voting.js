import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./style.css";
import Buttons from "./buttons";
import Result from "./result";

export default function Voting(props) {
  const options = props.votes.map((votes) => votes.option);
  const [state, setState] = useState(props.state);
  useEffect(() => {
    if (props.state !== state) {
      setState(props.state);
    }
  }, [props.state]);

  function vote(optionIndex) {
    setState("close");
    props.votes[optionIndex].count++;
  }
  const panel =
    state === "open" ? (
      <div className={"voting"}>
        <h3>{props.title}</h3>
        <Buttons options={options} onVote={vote} />
      </div>
    ) : (
      <div className={"voting"}>
        <h3>{props.title}</h3>
        <Result votes={props.votes} />
      </div>
    );

  return panel;
}

Voting.propTypes = {
  title: PropTypes.string,
  state: PropTypes.string,
  votes: PropTypes.array,
};
