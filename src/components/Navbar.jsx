import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const { pathname } = useLocation();
  return (
    <div className="nav">
      <Link to="/">
        <img
          style={{ marginTop: 5 }}
          src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
          alt=""
          className="logo"
        />
      </Link>
      <Link
        to="/"
        style={{ opacity: `${pathname === "/" ? "100%" : ""}` }}
        className="link"
      >
        Home
      </Link>
      <Link
        to="/tv"
        style={{ opacity: `${pathname === "/tv" ? "100%" : ""}` }}
        className="link"
      >
        TV Shows
      </Link>
      <Link
        to="/movies"
        style={{ opacity: `${pathname === "/movies" ? "100%" : ""}` }}
        className="link"
      >
        Movies
      </Link>
      <Link
        to="/latest"
        style={{ opacity: `${pathname === "/latest" ? "100%" : ""}` }}
        className="link"
      >
        New & Popular
      </Link>
    </div>
  );
};

export default Navbar;
