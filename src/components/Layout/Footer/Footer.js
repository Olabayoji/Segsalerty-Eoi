import React from "react";
import { Social } from "../Navigation/Social";
import Logo from "../Navigation/Logo";
import classes from "./Footer.module.css";
const Footer = () => {
  return (
    <footer className={classes.footer}>
      <p className={classes.copyright}>
        © 2022 Segzalerty . All rights reserved
      </p>
      <div className={classes.logo}>
        <Logo />
      </div>
      <div className={classes.social}>
        <Social />
      </div>
    </footer>
  );
};

export default Footer;
