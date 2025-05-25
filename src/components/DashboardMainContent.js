import React from "react";

// style
import "../styles/DashboardMainContent.css";

// child components
import LeftPanel from "./LeftPanel";
import RightPanel from "./RightPanel";

// icons
import { CircleChevronRight } from "lucide-react";

const DashboardMainContent = ({ openSidebar, isMobile }) => {
  return (
    <main className="dashboard-main">
      {isMobile && (
        <CircleChevronRight className="hamburger-btn" onClick={openSidebar} />
      )}
      <div className="left-panel">
        <LeftPanel isMobile={isMobile} />
      </div>
      <div className="right-panel">
        <RightPanel />
      </div>
    </main>
  );
};

export default DashboardMainContent;
