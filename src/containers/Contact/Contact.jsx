import React from "react";
import "./Contact.css";
const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="section-heading">
          <h1>Contact</h1>
          <h6>Get In Touch</h6>
          <p className="text-center">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit
            fugiat inventore dolorem aliquam ipsam voluptates, dolores possimus
            ut, repellendus iste quae culpa nihil consequatur odio pariatur.
            Temporibus ad voluptas accusamus.
          </p>

          <button className="emailButton">
            <a
              href="mailto:hugotomas55@hotmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Contact
            </a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
