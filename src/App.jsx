import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home";
import Latest from "./components/Latest";
import Movies from "./components/Movies";
import Navbar from "./components/Navbar";
import TV from "./components/TV";

const App = () => {
  return (
    <Router>
      <Navbar />
      <div style={{ marginTop: 45 }}>
        <Route exact path="/" component={Home} />
        <Route exact path="/tv" component={TV} />
        <Route exact path="/movies" component={Movies} />
        <Route exact path="/latest" component={Latest} />
      </div>
    </Router>
  );
};

export default App;
