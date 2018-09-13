import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => (
  <div clasName="navbar-header">
    <ul className="navbar">
      <li>
        <Link to="/contact">Contact</Link>
      </li>
      <li>
        <Link to="/projects">Projects</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li className="website-title">
        <Link to="/">Gregor Cox</Link>
      </li>
    </ul>
  </div>
);

export default Navbar;
