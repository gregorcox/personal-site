import React from "react";
import pdf from '../files/cv.pdf';

const About = () => (
  <div className="about">
    <h1 className="headline">About me</h1>
    <div className="about-paragraph">
      <p><strong>I am passionate about software development and all things web. I love being able to turn complex problems into great looking user interfaces</strong>. <br/><br/>
      
      I am currently working as a front-end developer at a digital agency in Shoreditch where I use JavaScript to create modern looking, dynamic websites for a wide range of clients.<br/><br/> 
      
      Before moving to London I graduated from <a href="https://codeclan.com/">CodeClan's</a> software development course in Edinburgh. Throughout the 16 week course I developed strong programming skills in Ruby, Java, and JavaScript with a particular focus on web development. The course involved around 800 hours of class time and personal study, daily pair programming labs and three full-stack projects (you can check those out <a href="/projects" >here</a>). <br/><br/>

      Prior to CodeClan I graduated with a 1st class BSc in Psychology, and it remains useful in my UX planning. Outside of software I also enjoy traveling to new places, football, film, and lifting heavy things.</p>
    </div>
    <div className="about-photo">
      <img className="profile" src={require('../images/profile.jpg')} alt="Gregor Cox" />
      {/* <form action={pdf} target="_blank">
        <input className="button" type="submit" value="View my CV" />
      </form> */}
    </div>
  </div>
);

export default About;
