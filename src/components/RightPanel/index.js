import React from "react";

// style
import "../../styles/RightPanel.css";

// child components
import CalendarView from "./CalendarView";
import UpcomingSchedule from "./UpcomingSchedule";

// img
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
