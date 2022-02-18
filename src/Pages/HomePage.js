import React from "react";
import classes from "./HomePage.module.css";
import { Link } from "react-router-dom";
import image from "../assets/img1.jpeg";
import image2 from "../assets/business.jpeg";
const HomePage = () => {
  return (
    <React.Fragment>
      <div className={classes["first-section"]}>
        <div className={classes.description}>
          <h2>A Community of Techies</h2>
          <p>
            We are a support system for talents who want to improve their skills
            and stay updated with all the latest trends in technology
          </p>
          <Link to="join">
            <p className={classes["join-top"]}>Join us</p>
          </Link>
        </div>
        <div className={classes.circle}></div>
        <img src={image} alt="" />
      </div>
      <div className={classes["middle-section"]}>
        <h2>Our Mission</h2>
        <p>
          To identify, mentor, and upskill obscure talents while aligning them
          with their skill sets and goals, to deploy and situate engineers in a
          recognized spot in the tech global ecosystem.
        </p>
      </div>
      <div className={classes["bottom-section"]}>
        <div>
          <img src={image2} alt="" />
        </div>
        <div className={classes.bottoms}>
          <p>
            Do you want to be a member of a community where like minds attract
            and discuss? easy access to resources and information on available
            job opportunities?
          </p>
          <p>
            Kindly fill the form with the right information and a team member
            will reach out to you within 3days.
          </p>
          <Link to="join">
            <p className={classes.join}>Join us</p>
          </Link>
        </div>
      </div>
    </React.Fragment>
  );
};

export default HomePage;
