import React from "react";
import "./Hero.css";
import AnchorLink from "react-anchor-link-smooth-scroll";
// import profile_img from "../../assets/profile_img.png";

const Hero = () => {
  return (
    <div id="home" className="hero">
      {/* <img src={profile_img} alt="" /> */}
      <h1>
        <span>I am Gausiya khan</span> <br /> Frontend developer
      </h1>
      {/* <p>
        I am Gausiya khan frontend developer from india last 1 years , I love to
        develop different web Apps{" "}
      </p> */}
      <div className="hero-section">
        <AnchorLink className="anchor-link" href="#contact">
          <div className="hero-connect">Connect With Me</div>
        </AnchorLink>

        <div className="hero-resume">
          {" "}
          {/* <a href="https://www.google.com/">My Resume</a> */}
          <a href="https://drive.google.com/file/d/1o7l4T6IG73E75EN3EYq725SUoCf606_I/view?usp=sharing">
            My Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
