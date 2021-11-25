import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { changeTheme } from "../features/theme";

export default function ColorChange() {
  const dispatch = useDispatch();
  const [color, setColor] = useState("");

  console.log(color);
  return (
    <form
      className="wrapper"
      onClick={(e) => {
        e.preventDefault();
        dispatch(changeTheme(color));
      }}
    >
      <input type="text" onChange={(e) => setColor(e.target.value)} />
      <button className="txt-btn" onClick={() => dispatch(changeTheme(color))}>
        Change Color
      </button>
    </form>
  );
}
