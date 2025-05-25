import React from "react";

// data
import appointments from "../../data/appointments";

// child component
import SimpleAppointmentCard from "../SimpleAppointmentCard ";

const UpcomingSchedule = () => {
  return (
    <div className="upcoming-schedule">
      <h4>The Upcoming Schedule</h4>
      {appointments.map((entry, i) => (
        <div key={i}>
          <p className="schedule-day">{entry.day}</p>
          <div className="schedule-items">
            {entry.slots.map((slot, idx) => (
              <SimpleAppointmentCard
                key={idx}
                title={slot.title}
                time={slot.time}
                icon={slot.emoji}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default UpcomingSchedule;
