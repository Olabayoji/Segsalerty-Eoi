import React from "react";
import { Link } from "react-router-dom";
import classes from "./Logo.module.css";
import BrandLogo from "../../../assets/Segzlogo.svg";
import { useLocation } from "react-router";
const Logo = () => {
  const { pathname } = useLocation();

  let classN =
    pathname !== "/admin"
      ? `${classes.right} ${classes.container}`
      : `${classes.container}`;

  return (
    <div className={classN}>
      <a href="https://segsalertywebsite.netlify.app/" className={classes.text}>
        <img src={BrandLogo} alt=" " />
      </a>
    </div>
  );
};

export default Logo;
