import React, { useState } from "react";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import "./Sidebar.css";
import { IconContext } from "react-icons";

function Sidebar() {
  const [sidebar, setSidebar] = useState(true);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <div>
          <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
            <ul className="nav-menu-items" onClick={showSidebar}>
              <li className="navbar-toggle">
                <Link to="#" className="menu-bars">
                  {!sidebar ? (
                    <AiIcons.AiOutlineArrowLeft />
                  ) : (
                    <AiIcons.AiOutlineArrowRight />
                  )}
                </Link>
              </li>
              {SidebarData.map((item, index) => {
                return (
                  <li key={index} className={item.cName}>
                    <Link to={item.path}>
                      {item.icon}
                      <span>{item.title}</span>
                    </Link>
                  </li>
                );
              })}
              <li className="logout">
                <Link to="#" className="menu-bars">
                  {!sidebar ? (
                    <AiIcons.AiOutlineArrowLeft />
                  ) : (
                    <AiIcons.AiOutlineArrowRight />
                  )}
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </IconContext.Provider>
    </>
  );
}

export default Sidebar;
