import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [input, setInput] = useState(``);
  const [image, setImage] = useState(``);
  const [userName, setUser] = useState(`octocat`);
  const url = `https://api.github.com/users/${userName}`;

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setImage(data.avatar_url));
  }, [userName]);

  const search = async (e) => {
    // prevent default settings (refreshing)
    e.preventDefault();
    // find the user object
    setUser(input);
    // clear input
    setInput(``);
  };

  return (
    <div className="App">
      <div className="img-wrapper">
        <img src={image} alt="profile" />
      </div>
      <h3>{userName}</h3>
      <form onSubmit={search}>
        <input
          onChange={(e) => setInput(e.target.value)}
          type="search"
          value={input}
          name=""
          id=""
        />
      </form>
    </div>
  );
}

export default App;
