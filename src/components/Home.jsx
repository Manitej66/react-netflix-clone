import React, { useState, useEffect } from "react";
import requests from "../utils/api";
import axios from "axios";
import List from "./List";
import Placeholder from "../utils/Placeholder";
const base = "https://image.tmdb.org/t/p/original/";

const Home = () => {
  const [movie, setMovie] = useState();
  const [loading, setLoading] = useState(true);
  const [loaded, setLoaded] = useState(false);

  const { fetchNowPlaying } = requests;

  useEffect(() => {
    axios.get(fetchNowPlaying).then((response) => {
      const randomElement =
        response.data.results[
          Math.floor(Math.random() * response.data.results.length)
        ];
      setMovie(randomElement);
      setLoading(false);
    });
  }, []);

  return (
    <div>
      {loading ? (
        <Placeholder />
      ) : (
        <div
          className="backdrop"
          style={{
            backgroundImage: `url(${base + movie.backdrop_path})`,
          }}
        >
          <div className="backdrop-text">
            <h1 className="backdrop-title" style={{ fontSize: 50 }}>
              {movie.name || movie.title}
            </h1>
            <p className="backdrop-subtitle">{movie.overview}</p>
          </div>
        </div>
      )}
      <div style={{ marginTop: "70vh" }}>
        <List name="now playing" data={requests.fetchNowPlaying} />
        <List name="trending" data={requests.fetchTrending} />
        <List name="top rated" data={requests.fetchTVTopRated} />
      </div>
    </div>
  );
};

export default Home;
