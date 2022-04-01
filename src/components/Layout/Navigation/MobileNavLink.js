import React, { useState } from "react";
import classes from "./MobileNavLink.module.css";
import { MenuToggle } from "./MenuToggle";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Social } from "./Social";
import { useLocation } from "react-router";
const MobileNavLink = () => {
  const token = useSelector((state) => state.auth.loginToken);
  const { pathname } = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const onToggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className={classes.container}>
      <MenuToggle isOpen={isOpen} toggle={onToggle} />
      {isOpen && (
        <React.Fragment>
          <ul onClick={onToggle}>
            {/* <li>
              <Link to="/">Home</Link>
            </li> */}
            {token && (
              <li>
                <Link to="/admin">Dashboard</Link>
              </li>
            )}
            <li>
              <Link to="/join">Join Us</Link>
            </li>
            {pathname === "/admin" && <Social />}
          </ul>
        </React.Fragment>
      )}
    </div>
  );
};

export default MobileNavLink;
