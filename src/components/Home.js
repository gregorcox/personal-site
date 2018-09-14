import React from "react";
import Background from '../images/background1.jpg';
import { Link } from "react-router-dom";

var sectionStyle = {
  backgroundImage: "url(" + Background + ")",
  maxWidth: "100%",
  height: "auto"
};

const Home = () => (
  <div className="welcome-header" style={ sectionStyle }>
    <div className="welcome-message">
      <h1>Hello, I'm Gregor</h1>
      <h3>I'm an Edinburgh based software developer focused on writing clean, elegant code and crafting user friendly experiences</h3>
      <Link to='/projects'>
        <button type="button">View my work</button>
      </Link>
    </div>
  </div>
);

export default Home;
