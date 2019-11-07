import React from "react";

const Contact = () => (
  <div className="contact">
    <h1>Contact me</h1>
    <p className="email">To have a conversation, contact me at <a href="mailto:gregorcox@gmail.com?Subject=Hey%20Gregor!" target="_top"> gregorcox@gmail.com</a></p>
    <p>or find me on:</p>
    <div className="social-media">
        <a href="https://www.linkedin.com/in/gregorcox/" alt="LinkedIn" target="_blank" rel="noopener noreferrer">
          <img src={require('../images/linkedin.png')} height="80" width="80" alt="LinkedIn"/>
        </a>
        <a href="https://www.github.com/gregorcox" alt="GitHub" target="_blank" rel="noopener noreferrer">
          <img src={require('../images/github.png')} height="80" width="80" alt="GitHub"/>
        </a>
      </div>
  </div>
);

export default Contact;
