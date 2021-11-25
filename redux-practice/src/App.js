import "./App.css";
import Login from "./components/login";
import Profile from "./components/profile";
import Logout from "./components/logout";
import ChangeColor from "./components/colorChange";

function App() {
  return (
    <div className="App">
      <Profile />
      <div className="buttons-wrapper">
        <Login />
        <Logout />
      </div>
      <ChangeColor />
    </div>
  );
}

export default App;
