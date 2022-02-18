import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./NavLinks.module.css";
import { useSelector } from "react-redux";

const NavLinks = () => {
  const token = useSelector((state) => state.auth.loginToken);

  let activeClassName = `${classes.active}`;
  return (
    <div className={classes.container}>
      <ul>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? activeClassName : undefined
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          {token && (
            <NavLink
              to="admin"
              className={({ isActive }) =>
                isActive ? activeClassName : undefined
              }
            >
              Dashboard
            </NavLink>
          )}
        </li>
        <li>
          <NavLink
            to="join"
            className={({ isActive }) =>
              isActive ? activeClassName : undefined
            }
          >
            Join Us
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default NavLinks;
