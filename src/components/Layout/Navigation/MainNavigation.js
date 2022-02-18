import React from "react";
import classes from "./MainNavigation.module.css";
import Logo from "./Logo";
import { Social } from "./Social";
import NavLinks from "./NavLinks";
import MobileNavLink from "./MobileNavLink";
import { DeviceSize } from "../Responsive";
import { useMediaQuery } from "react-responsive";
const MainNavigation = () => {
  const isMobile = useMediaQuery({ maxWidth: DeviceSize.tablet });
  return (
    <React.Fragment>
      <nav className={classes.container}>
        <div className={classes.left}>
          {!isMobile && <NavLinks />}
          {isMobile && <Logo />}
        </div>
        <div className={classes.middle}>{!isMobile && <Logo />}</div>
        <div className={classes.right}>
          {!isMobile && <Social />}
          {isMobile && <MobileNavLink />}
        </div>
      </nav>
    </React.Fragment>
  );
};

export default MainNavigation;
