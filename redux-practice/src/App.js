import "./App.css";
import Login from "./components/login";
import Profile from "./components/profile";
import Logout from "./components/logout";

function App() {
  return (
    <div className="App">
      <Profile />
      <div className="buttons-wrapper">
        <Login />
        <Logout />
      </div>
    </div>
  );
}

export default App;
