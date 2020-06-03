import React from "react";
import "./AboutMe.css";

const AboutMe = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="profile-img" data-aos="fade-right" data-aos-delay="300">
          <img src="images/profile.jpeg " alt="profile" />
        </div>
        <div
          className="about-details"
          data-aos="fade-left"
          data-aos-delay="600"
        >
          <div className="about-heading">
            <h1>About</h1>
          </div>
          <div className="centered-text">
            <p>Hi, I'm a software engineer based in the UK.</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit
              alias omnis asperiores vitae sit ipsum reprehenderit. Eligendi
              libero animi fugiat suscipit voluptates provident velit veniam,
              sapiente voluptas, mollitia alias et.
            </p>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
              itaque amet exercitationem expedita quasi. Pariatur, iste numquam
              cumque beatae officiis dignissimos, ea doloremque dolorem nobis
              error qui fuga quae rem!
            </p>
          </div>

          <p className="centered-text">Recent Technologies:</p>

          <div className="about-grid">
            <li>React</li>
            <li>HTML & CSS</li>
            <li>Javascript (ES6+)</li>
            <li>Python</li>
            <li>Firebase</li>
            <li>AWS</li>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
