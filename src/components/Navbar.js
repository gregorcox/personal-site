import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => (
  <div clasName="navbar-header">
    <ul className="navbar">
      <li>
        <NavLink to="/contact" activeStyle={{ color: "white" }}>Contact</NavLink>
      </li>
      <li>
        <NavLink to="/projects" activeStyle={{ color: "white"}}>Projects</NavLink>
      </li>
      <li>
        <NavLink to="/about" activeStyle={{ color: "white"}}>About</NavLink>
      </li>
      <li>
        <NavLink exact to="/" activeStyle={{ color: "white"}}>Home</NavLink>
      </li>
      <li className="website-title">
        <NavLink to="/" activeStyle={{ color: "white"}}>Gregor Cox</NavLink>
      </li>
    </ul>
  </div>
);

export default Navbar;
