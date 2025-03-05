import React, { useState } from "react";
import "./Navbar.css";
import AnchorLink from "react-anchor-link-smooth-scroll";

// import Menu from "@mui/material/Menu";
// import logo from "../assets/logo.svg";

const Navbar = () => {
  const [menu, setMenu] = useState("");
  return (
    <div className="navbar">
      {/* <img src={logo} alt="" /> */}
      <ul className="nav-menu">
        <li>
          {" "}
          <AnchorLink className="anchor-link" href="#home">
            <p onClick={() => setMenu("Home")}>Home</p>
            {/* {menu === "home" ? (
              <img src={underline} alt="" width="30px" />
            ) : (
              <></>
            )} */}
          </AnchorLink>
        </li>

        <li>
          {" "}
          <AnchorLink className="anchor-link" href="#education" offset={50}>
            <p onClick={() => setMenu("services")}>Education</p>
            {/* {menu === "services" ? (
              <img src={underline} alt="" width="30px" />
            ) : (
              <></>
            )} */}
          </AnchorLink>
        </li>
        <li>
          {" "}
          <AnchorLink className="anchor-link" href="#work" offset={50}>
            <p onClick={() => setMenu("Work")}>Projects</p>
            {/* {menu === "Portfolio" ? (
              <img src={underline} alt="" width="30px" />
            ) : (
              <></>
            )} */}
          </AnchorLink>
        </li>
        <li>
          {" "}
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            <p onClick={() => setMenu("Work")}>Contact</p>
            {/* {menu === "Portfolio" ? (
              <img src={underline} alt="" width="30px" />
            ) : (
              <></>
            )} */}
          </AnchorLink>
        </li>
        <AnchorLink className="anchor-link" href="#contact">
          {" "}
          <div className="nav-connect">Connect With Me</div>{" "}
        </AnchorLink>
      </ul>
    </div>
  );
};

export default Navbar;
