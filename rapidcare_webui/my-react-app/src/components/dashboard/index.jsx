import React from "react";
import Sidebar from "./Sidebar";

const Dashboard = () => {
  return (
    <>
      <div>
        <div className="sidebar">
          <Sidebar />
        </div>
        <div className="main"></div>
      </div>
    </>
  );
};

export default Dashboard;
