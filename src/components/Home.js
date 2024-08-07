import React from "react";
import { Link } from "react-router-dom";
import Background from "../images/london.jpg";

var sectionStyle = {
  backgroundImage: "url(" + Background + ")",
  maxWidth: "100%",
  height: "100vh",
  width: "100vw",
  backgroundSize: "cover",
};

const Home = () => (
  <div className="welcome-header" style={sectionStyle}>
    <div className="welcome-message">
      <h1>Hello, I'm Gregor</h1>
      <h3>
        I'm a London based software developer focused on writing clean, elegant
        code and crafting user friendly experiences
      </h3>
      <Link to="/projects">
        <button className="button" type="button">
          View my work
        </button>
      </Link>
    </div>
  </div>
);

export default Home;
