import "./App.css";
import React, { useEffect, useState } from "react";
import Input from "./components/input";
import Todo from "./components/todo";
import Actions from "./components/actions";
import MobileActions from "./components/mobileActions";
import db from "./utils/firebase";
import { collection, onSnapshot } from "firebase/firestore";

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "todos"), (snapshot) => {
      let tasks = [];
      snapshot.docs.map((doc) => tasks.push(doc.data()));
      setItems(tasks);
    });

    return () => unsubscribe();
  }, []);

  console.log(items);
  console.log(items[2]);

  return (
    <div className="App">
      <div className="bg">
        <div className="content-wrapper">
          <h1 className="light">TO DO</h1>
          <Input />
          <div className="todo-wrapper">
            {items.map((item) => {
              return <Todo entry={item.todo} />;
            })}
            <Actions amount={items.length} />
          </div>
          <MobileActions />
        </div>
      </div>
    </div>
  );
}

export default App;
