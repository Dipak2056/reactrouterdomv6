import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Error from "./pages/Error";

function App() {
  return (
    <Router>
      <h1>Route Links heading</h1>
      <Link to="/" path="/">
        Home
      </Link>
      <Link to="/contact" path="/contact">
        contact
      </Link>
      <Link to="/path" path="/about">
        about
      </Link>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/contact/:username" element={<Contact />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="*" element={<Error />}>
          {" "}
        </Route>
      </Routes>
      <footer>hey i build this app</footer>
    </Router>
  );
}

export default App;
