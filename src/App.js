import logo from "./logo.svg";
import "./App.css";

import Button from "./Button";
import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState([]);
  const getMovies = async () => {
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`
      )
    ).json();
    setMovie(json.data.movies);
    setLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);
  return (
    <div>
      {loading ? (
        <h1>loading...</h1>
      ) : (
        <div>
          {movie.map((movie) => (
            <div>{movie.title}</div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
