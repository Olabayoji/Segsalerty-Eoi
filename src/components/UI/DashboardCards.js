import React from "react";
import classes from "./DashboardCards.module.css";

const DashboardCards = (props) => {
  return (
    <div className={classes.container}>
      {props.icon}
      <h2>{props.value}</h2>
      <p>{props.desc}</p>
    </div>
  );
};

export default DashboardCards;
