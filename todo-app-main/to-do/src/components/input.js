import React, { useState } from "react";
import { addDoc, serverTimestamp, collection } from "firebase/firestore";
import db from "../utils/firebase";

export default function Input() {
  const [input, setInput] = useState("");
  const create = async (e) => {
    // Prevent onSubmit from refreshing
    e.preventDefault();

    // Add a document to the collection
    await addDoc(collection(db, "todos"), {
      // What do you want to add to the collection
      date: serverTimestamp(),
      todo: input,
    });
    // Clear my input
    setInput("");
  };

  return (
    <form onSubmit={create} className="create-input">
      <div className="inactive-checkbox"></div>
      <input
        type="text"
        name="txt-input"
        id="create-input"
        placeholder="Create a new to do..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
    </form>
  );
}
