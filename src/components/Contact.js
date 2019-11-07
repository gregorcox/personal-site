import React from "react";

class Contact extends React.Component {
  constructor(props) {
    super(props);
  
    this.state = {
      name: "",
      email: "",
      message: ""
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(evt) {
    const { state } = this;
    state[evt.target.name] = evt.target.value;
    this.setState(state);
  }

  render() {
    const contactForm = (
      <form className="contact-form" action="/action_page.php">
        <label>Name</label>
        <input type="text" id="name" name="name" placeholder="Name" onChange={this.handleChange} />

        <label>Email</label>
        <input type="email" id="email" name="email" placeholder="Your email" onChange={this.handleChange} />

        <label>Message</label>
        <textarea id="message" name="message" placeholder="Your message.." onChange={this.handleChange} ></textarea>
        <button type="submit" value="Submit" className="button">Submit</button>
      </form>
    )

    return (
      <div className="contact">
        <h1>Contact me</h1>

        {contactForm}

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
    )
  }

}

export default Contact;
