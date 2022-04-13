import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Error from "./pages/Error";

function App() {
  return (
    <div className="App">
      <h1>main page</h1>
      <Router>
        <Link to="/">Home</Link> <hr />
        <Link to="/about" path="/about">
          About
        </Link>{" "}
        <span></span>
        <Link to="/contact">Contact</Link>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/contact/:username" element={<Contact />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="*" element={<Error />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
