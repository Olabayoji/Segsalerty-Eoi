import React from "react";
import classes from "./Social.module.css";
import { FiInstagram, FiTwitter } from "react-icons/fi";
import { BiBasketball } from "react-icons/bi";
import { AiOutlineYoutube } from "react-icons/ai";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authActions } from "../../../store/auth-slice";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export function Social(props) {
  const loggedIn = useSelector((state) => state.auth.loginToken);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const logoutHandler = () => {
    dispatch(authActions.logOut());
    navigate("/login");
  };

  const iconClass =
    pathname === "/join" || pathname === "/admin" || pathname === "/login"
      ? `${classes.join}`
      : `${classes.container}`;

  if (pathname === "/admin" && loggedIn) {
    return (
      <button className="logout" onClick={logoutHandler}>
        Logout
      </button>
    );
  }

  return (
    <div className={iconClass}>
      <ul>
        <li>
          <a href="/" target="_blank">
            <FiInstagram />
          </a>
        </li>
        <li>
          <a href="/" target="_blank">
            {" "}
            <BiBasketball />
          </a>
        </li>
        <li>
          <a
            href="https://twitter.com/SegsalertyTech"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            <FiTwitter />
          </a>
        </li>

        <li>
          <a href="/" target="_blank">
            {" "}
            <AiOutlineYoutube />
          </a>
        </li>
      </ul>
    </div>
  );
}
