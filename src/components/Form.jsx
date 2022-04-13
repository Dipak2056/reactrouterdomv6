import { Alert } from "bootstrap";
import React, { useState } from "react";
import { fetchMovie } from "../helper/axiosHelper";
import CustomCard from "./Card";

const Form = ({ handleOnAddToList }) => {
  const [search, setSearch] = useState("");
  const [movie, setMovie] = useState({});

  const handleChange = (e) => {
    const { value } = e.target;
    setSearch(value);
  };
  const handleOnSubmit = async (event) => {
    event.preventDefault();
    const movie = await fetchMovie(search);
    setMovie(movie.data);
    console.log(movie);
    setSearch("");
  };
  return (
    <div>
      <form onSubmit={handleOnSubmit}>
        <input
          type="text"
          id="movieName"
          name="movieName"
          placeholder="enter movie name"
          onChange={handleChange}
        />{" "}
        <button className="btn btn-warning">Find</button>
        <br />
      </form>
      <div className="card-component">
        {movie.Response === "True" && (
          <CustomCard movie={movie} handleOnAddToList={handleOnAddToList} />
        )}
        {movie.Response === "False" && (
          <alert variant="danger">{movie.Error}</alert>
        )}
      </div>
    </div>
  );
};

export default Form;
