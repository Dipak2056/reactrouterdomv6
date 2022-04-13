import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Errorpage from "./pages/Errorpage";

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link> <br />
        <Link to="/about">About</Link> <br />
        <Link to="/contact">Contact</Link> <br />
      </nav>
      <h1>hello world</h1>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact/:username" element={<Contact />}></Route>
        <Route path="*" element={<Errorpage />}></Route>
      </Routes>
      <footer>this is the footer</footer>
    </Router>
  );
}

export default App;
