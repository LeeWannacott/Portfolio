import React, { Component } from "react";
import "./Contact.css";

export class Contact extends Component {
  render() {
    return (
      <div className="container">
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.2/css/all.min.css"
        />
        <hr></hr>
        <div className="social-icons">
          <a
            href="https://github.com/LeeWannacott"
            rel="noopener noreferrer"
            target="_blank"
          >
            <i className="fab fa-github icon-github"></i>
          </a>
          <a
            href="https://nz.linkedin.com/in/lee-wannacott-64289b174?challengeId=AQFkfy__xc4AmAAAAXb6XNWBg-lX0dJGd3cUbYqSlczEeAsPTi875qJdB4ldYjqDS6OqbyjucceHYj0w4Ix3vu9AKhidJGAtJw&submissionId=c4e5ccfe-bab5-5916-24bc-2c10d37ed03c"
            rel="noopener noreferrer"
            target="_blank"
          >
            <i className="fab fa-linkedin-in icon-linked"> </i>
          </a>
          <a
            href="mailto:WannacottL@gmail.com"
            rel="noopener noreferrer"
            target="_blank"
          >
            <i className="fa fa-envelope icon-mail"></i>
          </a>
          <a
            href="https://medium.com/@lee.wannacott"
            rel="noopener noreferrer"
            target="_blank"
          >
            <i className="fab fa-medium icon-mail"></i>
          </a>
          <a
            href=" https://www.goodreads.com/lee_wannacott"
            rel="noopener noreferrer"
            target="_blank"
          >
            <i className="fab fa-goodreads icon-mail"></i>
          </a>
        </div>
      </div>
    );
  }
}

export default Contact;
