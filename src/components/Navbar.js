import React from "react";
import { NavLink } from "react-router-dom";
import { FaBars } from 'react-icons/fa';
//
// const Navbar = () => (
//
//   <div className="navbar-header">
//     <ul className="navbar" id="myTopnav">
//       <li>
//         <NavLink to="/contact" activeStyle={{ color: "white" }}>Contact</NavLink>
//       </li>
//       <li>
//         <NavLink to="/projects" activeStyle={{ color: "white"}}>Projects</NavLink>
//       </li>
//       <li>
//         <NavLink to="/about" activeStyle={{ color: "white"}}>About</NavLink>
//       </li>
//       <li>
//         <NavLink exact to="/" activeStyle={{ color: "white"}}>Home</NavLink>
//       </li>
//       <li className="website-title">
//         <NavLink to="/" activeStyle={{ color: "white"}}>Gregor Cox</NavLink>
//       </li>
//       <li>
//         <a href="javascript:void(0);" class="icon" onClick={this.myFunction}>
//           <FaBars />
//         </a>
//       </li>
//     </ul>
//   </div>
// );
//
//   myFunction() {
//     var x = document.getElementById("myTopnav");
//     if (x.className === "navbar") {
//       x.className += " responsive";
//     } else {
//       x.className = "navbar";
//     }
//   }
//
// export default Navbar;

class Navbar extends React.Component {

  constructor(props){
    super(props);
    this.state = {};
    this.myFunction = this.myFunction.bind(this);
  }

  myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "navbar") {
      x.className = "responsive";
    } else {
      x.className = "navbar";
    }
  }

  render() {
    return(
      <div className="navbar-header">
        <ul className="navbar" id="myTopnav">
          <li>
            <a href="javascript:void(0);" class="icon" onClick={this.myFunction}>
              <FaBars />
            </a>
          </li>
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
          <li className="website-title" id="title">
            <NavLink to="/" activeStyle={{ color: "white"}}>Gregor Cox</NavLink>
          </li>
        </ul>
      </div>
    )
  }

}

export default Navbar;
