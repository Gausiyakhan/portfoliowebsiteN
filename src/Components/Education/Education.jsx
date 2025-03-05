import React from "react";
import "./Education.css";
// import University_img from "../assets/aktu-image.jpeg";
import University_img from "./university-img.jpeg";

const Education = () => {
  return (
    <>
      <div className="education" id="education">
        <div>
          <br />
          <p>
            Education is not the learning of facts, but the training of the mind
            to think.
          </p>
          <br />
        </div>
        <div className="education1">
          <div className="box-container1">
            <img src={University_img} className="university-img" />
          </div>{" "}
          <br /> <br />
          <div className="box-container2">
            <h1>Bachelor of Technology</h1>
            <p>2021-2024 | Completed</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Education;
