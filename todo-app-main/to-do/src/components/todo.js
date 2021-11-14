import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
const check = <FontAwesomeIcon icon={faCheck} />;

export default function Todo(props) {
  const [state, setState] = useState(0);

  useEffect(() => {
    const text = document.getElementById("strike");
    console.log(text);
    if (state % 2 == 0) {
      console.log("even");
      text.classList.remove("strikethrough");
    } else {
      console.log("odd");
      text.classList.add("strikethrough");
    }
    console.log(state);
    return () => {};
  }, [state]);

  return (
    <div className="item-wrapper">
      <div className="check-wrapper">
        <i className="check-icon" id="check-i">
          {check}
        </i>
        <input
          onChange={() => setState(state + 1)}
          type="checkbox"
          name="checkbox"
          id="checkbox"
        />
      </div>
      <p id="strike">{props.entry}</p>
    </div>
  );
}
