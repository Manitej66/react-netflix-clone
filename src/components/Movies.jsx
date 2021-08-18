import React from "react";
import requests from "../utils/api";
import List from "./List";

const Movies = () => {
  return (
    <div>
      <List name="trending" data={requests.fetchTrending} />
      <List name="top rated" data={requests.fetchTopRated} />
      <List name="romantic" data={requests.fetchRomanticMovies} />
      <List name="netflix originals" data={requests.fetchNetflixOriginals} />
      <List name="documentaries" data={requests.fetchDocumentaries} />
    </div>
  );
};

export default Movies;
