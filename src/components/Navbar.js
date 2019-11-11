import React from "react";
import { NavLink } from "react-router-dom";
import { FaBars } from 'react-icons/fa';

class Navbar extends React.Component {

  constructor(props){
    super(props);
    this.state = {};
    this.changeNavClass = this.changeNavClass.bind(this);
    this.revertClass = this.revertClass.bind(this);
  }

  changeNavClass() {
    const navBar = document.getElementById("nav-bar");
    if (navBar.className === "navbar") {
      navBar.className = "responsive";
    } else {
      navBar.className = "navbar";
    }
  }

  revertClass() {
    const navBar = document.getElementById("nav-bar");
    if (navBar.className === "responsive") {
      navBar.className = "navbar";
    }
  }

  render() {
    return(
      <div className="navbar-header">
        <ul className="navbar" id="nav-bar">
          <li>
            <a className="icon" onClick={this.changeNavClass}>
              <FaBars />
            </a>
          </li>
          <li>
            <NavLink to="/contact" onClick={this.revertClass} activeStyle={{ color: "white" }}>Contact</NavLink>
          </li>
          <li>
            <NavLink to="/projects" onClick={this.revertClass} activeStyle={{ color: "white"}}>Projects</NavLink>
          </li>
          <li>
            <NavLink to="/about" onClick={this.revertClass} activeStyle={{ color: "white"}}>About</NavLink>
          </li>
          <li>
            <NavLink exact to="/" onClick={this.revertClass} activeStyle={{ color: "white"}}>Home</NavLink>
          </li>
          <li className="website-title">
            <NavLink to="/" onClick={this.revertClass} activeStyle={{ color: "white"}}>Gregor Cox</NavLink>
          </li>
        </ul>
      </div>
    )
  }

}

export default Navbar;

