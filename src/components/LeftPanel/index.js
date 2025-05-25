import React from "react";
import { Bell, ChevronDown, Search } from "lucide-react";

import HealthStatusCards from "./HealthStatusCards";
import ActivityFeed from "./ActivityFeed";

import "../../styles/LeftPanel.css";
import AnatomySection from "./AnatomySection ";

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
