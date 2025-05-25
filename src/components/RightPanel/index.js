import React from "react";
import "../../styles/RightPanel.css";

import CalendarView from "./CalendarView";
import UpcomingSchedule from "./UpcomingSchedule";
import profile from "../../assets/images/avtar.png";

const RightPanel = () => {
  return (
    <div className="schedule-wrapper">
      <div className="profile-add">
        <img
          src={profile}
          alt="Profile"
          className="profile-img"
          loading="lazy"
        />
        <button className="add-btn">+</button>
      </div>
      <CalendarView />
      <UpcomingSchedule />
    </div>
  );
};

export default RightPanel;
