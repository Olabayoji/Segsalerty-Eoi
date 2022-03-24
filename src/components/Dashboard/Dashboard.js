import React from "react";
import classes from "./Dashboard.module.css";
import MainContent from "./MainContent/MainContent";

const Dashboard = () => {
  return (
    <div className={classes.dashboard}>
      {/* <Sidebar /> */}
      <MainContent />
    </div>
  );
};

export default Dashboard;
