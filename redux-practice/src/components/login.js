import React from "react";
import { useDispatch } from "react-redux";
import { login } from "../features/user";

export default function Login() {
  const dispatch = useDispatch();

  return (
    <div className="login-wrapper">
      <button
        className="login-button"
        onClick={() =>
          dispatch(
            login({ name: "Joshua", age: 23, email: "jj1998april@gmail.com" })
          )
        }
      >
        LOGIN
      </button>
    </div>
  );
}
