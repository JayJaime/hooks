import React from "react";
import { doc, deleteDoc, collection } from "firebase/firestore";
import db from "../utils/firebase";

export default function actions(props) {
  const clearDoc = () => {
    console.log("clear");
  };

  return (
    <div className="actions-wrapper">
      <h5>{props.amount} items left</h5>
      <div className="filter-wrapper">
        <h5>All</h5>
        <h5>Active</h5>
        <h5>Completed</h5>
      </div>
      <h5 onClick={clearDoc} className="clear-button">
        Clear Completed
      </h5>
    </div>
  );
}
