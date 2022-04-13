import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Error from "./pages/Error";
import News from "./components/News";
import { useState } from "react";
import axios from "axios";
function App() {
  const [news, setNews] = useState([]);
  const fetchNews = () => {
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=us&apiKey=2eb7eb7e15f447c087874580dc8cf671"
      )
      .then((response) => setNews(response.data.articles));
    console.log(news);
  };

  return (
    <div className="App">
      <h1>main page</h1>
      <Home />
      <News news={news} fetchNews={fetchNews} key={news.id} />

      {/* <Router>
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
      </Router> */}
    </div>
  );
}

export default App;
