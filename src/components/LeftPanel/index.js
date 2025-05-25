import React from "react";

// icons
import { Bell, ChevronDown, Search } from "lucide-react";

// child components
import HealthStatusCards from "./HealthStatusCards";
import ActivityFeed from "./ActivityFeed";
import AnatomySection from "./AnatomySection ";

// style
import "../../styles/LeftPanel.css";

const LeftPanel = () => {
  return (
    <div className="anatomy-wrapper">
      <div className="search-wrapper">
        <Search className="search-icon" size={16} />
        <input className="search-input" type="text" placeholder="Search" />
        <Bell className="bell-icon" size={16} fill="#262682" />
      </div>
      <div className="header-row">
        <h2>Dashboard</h2>
        <span className="header-week">
          This Week <ChevronDown size={12} />
        </span>
      </div>
      <div className="anatomy-section">
        <AnatomySection />
        <div className="health-status-panel">
          <HealthStatusCards />
        </div>
      </div>
      <ActivityFeed />
    </div>
  );
};

export default LeftPanel;
