import { useParams } from "react-router-dom";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { baseUrl } from "../utils/api";
const base = "https://image.tmdb.org/t/p/original/";

const Detailed = () => {
  const { id } = useParams();

  const [movie, setMovie] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    axios
      .get(
        baseUrl +
          `/movie/${id}?api_key=${import.meta.env.VITE_API3_KEY}&language=en-US`
      )
      .then((response) => {
        setMovie(response.data);
        setLoading(false);
      })
      .catch((error) => {
        // if we didnt get a response from the server then it is a TV not a movie, so change the request url
        axios
          .get(
            baseUrl +
              `/tv/${id}?api_key=${
                import.meta.env.VITE_API3_KEY
              }&language=en-US`
          )
          .then((response) => {
            setMovie(response.data);
            setLoading(false);
          })
          .catch((error) => {
            setError(error);
            setLoading(false);
          });
      });
  }, []);

  if (loading) {
    return <p>loading...</p>;
  }

  if (error) {
    return (
      <div style={{ marginTop: "70vh", padding: 20 }}>
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div
      className="backdrop"
      style={{
        backgroundImage: `url(${base + movie.backdrop_path})`,
        backgroundPosition: "center",
      }}
    >
      <div style={{ marginTop: "70vh", padding: 20 }}>
        <div
          style={{ border: "1px solid #ccc", padding: 10, borderRadius: 10 }}
        >
          <h1>{movie.title || movie.name}</h1>
          <p>{movie.overview}</p>
        </div>
        <div
          style={{
            border: "1px solid #ccc",
            padding: 10,
            borderRadius: 10,
            marginTop: 20,
          }}
        >
          <p>Budget 💸 - ${movie.budget}</p>
          <p>released ✅ - {movie.release_date}</p>
          <p>Duration ⌚ - {movie.runtime} minutes</p>
          <p>rating ⭐ - {movie.vote_average}</p>
        </div>
      </div>
    </div>
  );
};

export default Detailed;
