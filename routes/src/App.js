import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutPage from "./pages/about";
import HomePage from "./pages/home";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
