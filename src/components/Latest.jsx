import React from "react";
import requests from "../utils/api";
import List from "./List";

const Latest = () => {
  return (
    <div>
      <List name="Popular Movies" data={requests.fetchTrending} />
      <List name="TV popular" data={requests.fetchTVPopular} />
    </div>
  );
};

export default Latest;
