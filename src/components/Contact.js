import React from "react";

const Contact = () => (
  <div className="contact">
    <h1>Contact me</h1>
    {/* <p className="email">To have a conversation, contact me at <a href= "tel:+447720595842">07720595842</a> or <a href="mailto:gregorcox@gmail.com?Subject=Hey%20Gregor!" target="_top"> gregorcox@gmail.com</a></p> */}

    <form className="contact-form" action="/action_page.php">
      <label>Name</label>
      <input type="text" id="name" name="name" placeholder="Name" />

      <label>Email</label>
      <input type="email" id="email" name="email" placeholder="Your email" />

      <label>Message</label>
      <textarea id="message" name="message" placeholder="Your message.."></textarea>
      <button type="submit" value="Submit" className="button">Submit</button>
    </form>

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
