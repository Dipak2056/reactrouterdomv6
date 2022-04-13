import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import MovieList from "./components/MovieList";
import Title from "./components/Title";
function App() {
  const [movieList, setMovieList] = useState([]);
  const [warningAlert, setWarningAlert] = useState(false);
  const [category, setCategory] = useState();

  const movieToDisplay = 

  const handleOnAddToList = (movie) => {
    const obj = { ...movie };
    setMovieList([obj]);
    // const movieExists = movieList.find((item) => item.imdbID === movie.imdbID);
    // if (movieExists) {
    //   setWarningAlert(true);
    // } else {
    //   setMovieList([...movieList, obj]);
    // }
    console.log(movieList);
  };

  return (
    <div className="App">
      <Title />
      <hr />
      <Form handleOnAddToList={handleOnAddToList} />
      <hr />
      <MovieList movieList={movieToDisplay} />
    </div>
  );
}

export default App;
