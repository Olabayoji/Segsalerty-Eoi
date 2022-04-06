import React from "react";
import Table from "../../Table/Table";
import classes from "./MainContent.module.css";
import Analytics from "../Analytics/Analytics";
import DashboardCards from "../../UI/DashboardCards";
import { FaUser } from "react-icons/fa";
import { useSelector } from "react-redux";
import HireTable from "../../Table/HireTable";
import ProductTable from "../../Table/ProductTable";
import MentorTable from "../../Table/MentorTable";

const MainContent = () => {
  const data = useSelector((state) => state.auth.data);

  return (
    <div className={classes.container}>
      <div>
        <DashboardCards
          icon={<FaUser />}
          value={data && data.length}
          desc="Total Mentees"
        />
        {/* <DashboardCards /> */}
      </div>
      <Table />
      <HireTable />
      <ProductTable />
      <MentorTable />
      {/* <Analytics /> */}
    </div>
  );
};

export default MainContent;
