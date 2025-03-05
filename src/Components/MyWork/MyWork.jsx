import React from "react";
import Project1 from "../../assets/Project1.png";
import searchimage from "../../assets/searchimage.png";
import ecommercewebsite from "../../assets/ecommercewebsite.png";
import bankimg from "../../assets/bank-img.png";
import "./MyWork.css";

const MyWork = () => {
  return (
    <div id="work" className="mywork">
      <h1 className="mywork-title">My Projects</h1>
      <div>{/* <img src="" alt="" /> */}</div>
      <div className="mywork-container">
        <div className="project-1">
          <a href="https://react-project1-tau.vercel.app/">
            <img src={Project1} alt="project1-img" />
          </a>
        </div>
        <div className="project-1">
          <a href="https://ecommerce-website-weld-ten.vercel.app/">
            <img src={ecommercewebsite} alt="project1-img" />
          </a>
        </div>
        <div className="projectt">
          <a href="https://image-search-app-azure.vercel.app/">
            <img src={searchimage} alt="project1-img" />
          </a>
        </div>
        <div className="projectt">
          <a href="https://bankapp-pied.vercel.app/">
            <img src={bankimg} alt="project1-img" />
          </a>
        </div>
        {/* {mywork_data.map((work, index) => {
          return <img key={index} src={work.w_img} alt="" />;
        })} */}
      </div>
      <div className="mywork-showmore">
        <p>Show More</p>
        {/* <img src={next} alt="" /> */}
      </div>
    </div>
  );
};

export default MyWork;
