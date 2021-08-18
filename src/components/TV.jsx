import React from "react";
import requests from "../utils/api";
import List from "./List";

const TV = () => {
  return (
    <div>
      <List name="popular" data={requests.fetchTVPopular} />
      <List name="airing today" data={requests.fetchTVAiringToday} />
      <List name="top rated" data={requests.fetchTVTopRated} />
    </div>
  );
};

export default TV;
