import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Detailed from "./components/Detailed";
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
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/movie/:id" component={Detailed} />
          <Route path="/tv" component={TV} />
          <Route path="/movies" component={Movies} />
          <Route path="/latest" component={Latest} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
