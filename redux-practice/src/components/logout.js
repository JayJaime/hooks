import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../features/user";

export default function Logout() {
  const dispatch = useDispatch();

  return (
    <div className="logout-wrapper">
      <button className="logout-button" onClick={() => dispatch(logout())}>
        LOGOUT
      </button>
    </div>
  );
}
