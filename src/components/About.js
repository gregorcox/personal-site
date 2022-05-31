import React from "react";

const About = () => (
  <div className="about">
    <h1 className="headline">About me</h1>

    <div className="about-container">

      <div className="about-paragraph">
        <p><strong>I am passionate about software development and all things web. I love being able to turn complex problems into great looking user interfaces</strong>. <br/><br/>

        I am currently working as a front-end developer at a digital agency in Shoreditch where I use JavaScript to build and maintain large scale web applications for a wide range of clients.<br/><br/>

        Before moving to London I graduated from <a href="https://codeclan.com/" target="_blank" rel="noopener noreferrer">CodeClan's</a> software development course in Edinburgh. Throughout the 16 week course I developed strong programming skills in Ruby, Java, and JavaScript with a particular focus on web development. The course involved around 800 hours of class time and personal study, daily pair programming labs and three full-stack projects (you can check those out <a href="/projects">here</a>). <br/><br/>
      </div>

      <div className="about-photo">
        <img src={require('../images/profile.jpg')} alt="Gregor Cox" />
      </div>

    </div>
  </div>
);

export default About;
