import logo from "./logo.svg";
import "./App.css";

import Button from "./Button";
import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    fetch(
      "https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year"
    )
      .then((response) => {
        response.json();
      })
      .then((json) => {
        setMovie(json.data.movies);
        setLoading(false);
        console.log(movie);
      });
  }, []);
  return <div>{loading ? <h1>loading...</h1> : null}</div>;
}

export default App;
