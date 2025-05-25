import React from "react";

// style
import "../styles/SimpleAppointmentCard.css"

const SimpleAppointmentCard = ({ title, time, doctor, icon, dark }) => {
  return (
    <div className={`schedule-card ${dark ? "dark-card" : ""}`}>
      <div className="schedule-title">
        {title} <span>{icon}</span>
      </div>
      <div className="schedule-time">{time}</div>
      {doctor && <div className="schedule-doctor">{doctor}</div>}
    </div>
  );
};

export default SimpleAppointmentCard;
