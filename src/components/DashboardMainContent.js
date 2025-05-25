import React from "react";
import "../styles/DashboardMainContent.css";
import LeftPanel from "./LeftPanel";
import RightPanel from "./RightPanel";

const DashboardMainContent = () => {
  return (
    <main className="dashboard-main">
      <div className="left-panel">
        <LeftPanel />
      </div>
      <div className="right-panel">
        <RightPanel />
      </div>
    </main>
  );
};

export default DashboardMainContent;
