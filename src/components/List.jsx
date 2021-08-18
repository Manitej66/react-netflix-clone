import axios from "axios";
import React, { useEffect, useState } from "react";
import Placeholder from "../utils/Placeholder";
const base = "https://image.tmdb.org/t/p/original/";

const List = ({ data, name }) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    axios.get(data).then((response) => {
      let l = response.data.results.filter((movie) => {
        return movie.poster_path !== null;
      });
      setMovies(l);
      setLoading(false);
    });
  }, [data]);

  return (
    <div className="row-container">
      <h3 style={{ margin: 0, paddingBottom: 10 }}>{name}</h3>
      {loading ? (
        <Placeholder />
      ) : (
        <div className="row">
          {movies.map((movie) => (
            <div key={movie.id}>
              {/* <div className="skeleton-image"></div>
              <div className="skeleton-title"></div> */}
              <img
                className={loaded ? "row_item" : "skeleton-image"}
                loading="lazy"
                onLoad={() => {
                  setLoaded(true);
                }}
                src={base + movie.poster_path}
                alt={movie.title}
              />

              <p className="title" style={{ paddingTop: 3, margin: 0 }}>
                {movie.title || movie.name}
              </p>
              <p className="desc">{movie.overview}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default List;
