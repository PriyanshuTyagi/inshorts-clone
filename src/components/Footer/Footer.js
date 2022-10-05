import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      {" "}
      <span className="name">
        {" "}
        Inshorts clone made by -{" "}
        <a
          href="https://www.linkedin.com/in/priyanshu-tyagi-0505461b1"
          target="__blank"
        >
          {" "}
          Priyanshu Tyagi{" "}
        </a>{" "}
      </span>{" "}
      <hr
        style={{
          width: "90%",
        }}
      />{" "}
      <div className="iconContainer">
        {" "}
        <a href="https://www.instagram.com/" target="__blank">
          {" "}
          <i className="fab fa-instagram-square fa-2x"></i>{" "}
        </a>{" "}
        <a
          href="https://www.linkedin.com/in/priyanshu-tyagi-0505461b1"
          target="__blank"
        >
          {" "}
          <i className="fab fa-linkedin fa-2x"></i>{" "}
        </a>{" "}
        <a href="" target="__blank">
          {" "}
          <i className="fas fa-link fa-2x"></i>{" "}
        </a>{" "}
      </div>{" "}
    </div>
  );
};

export default Footer;
