import React from "react";
import "./About.css";
import profile_img from "../../assets/profile_img.png";

const About = () => {
  return (
    <div id="about" className="about">
      <h1 className="about-title">About Me</h1>
      <div>{/* <img src={} alt="" /> */}</div>
      <div className="about-section">
        <div className="about-left">
          <img src={profile_img} alt="portfolio_img" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              Welcome to my portfolio! I have completed My B.Tech Computer
              Science, driven by my passion for technology and my desire to make
              a meaningful impact in the field. As a dedicated learner and
              technocrat, I strive to expand my knowledge and skills to deliver
              innovative solution
            </p>
            {/* <p>
              My fassion for Frontend developer is not only for videos its also
              for websites
            </p> */}
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>HTML & CSS</p>
              <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>JavaScript</p>
              <hr style={{ width: "40%" }} />
            </div>
            <div className="about-skill">
              <p>React JS</p>
              <hr style={{ width: "60%" }} />
            </div>
            <div className="about-skill">
              <p>Node JS</p>
              <hr style={{ width: "50%" }} />
            </div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>1+</h1>
          <p>Years of Experience</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>5+</h1>
          <p>Projecs Completed</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>5+</h1>
          <p>Happy clients</p>
        </div>
        <hr />{" "}
      </div>
    </div>
  );
};

export default About;
