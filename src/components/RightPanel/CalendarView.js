import React from "react";
import { ArrowBigLeft, ArrowBigRight } from "lucide-react";
import calendarData from "../../data/calendarData";
import SimpleAppointmentCard from "../SimpleAppointmentCard ";

const CalendarView  = () => {
  return (
    <div className="calendar-container">
      <div className="calendar-header">
        <h4>{calendarData.month}</h4>
        <div className="calendar-actions">
          <ArrowBigLeft className="arrow-icon" />
          <ArrowBigRight className="arrow-icon" />
        </div>
      </div>

      <div className="calendar-days">
        {calendarData.events.map((item, i) => (
          <div
            key={i}
            className={`day-column 
              ${item.active ? "active-day" : ""} 
              ${item.isSunday ? "sunday" : ""}`}
          >
            <p className="day-label">{item.day}</p>
            <p className="day-date">{item.date}</p>
            <div className="time-slots">
              {item.slots.map((slot, index) =>
                slot ? (
                  <span
                    key={index}
                    className={`time-slot ${
                      slot === item.slotSelected
                        ? "selected-time"
                        : ""
                    }`}
                  >
                    {slot}
                  </span>
                ) : (
                  <span className="time-slot">
                    <hr key={index} className="empty-slot" />
                  </span>
                )
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="calendar-schedule-cards">
        <SimpleAppointmentCard
          title="Dentist"
          time="09:00-11:00"
          doctor="Dr. Cameron Williamson"
          icon="🦷"
          dark
        />
        <SimpleAppointmentCard
          title="Physiotherapy Appointment"
          time="11:00-12:00"
          doctor="Dr. Kevin Djones"
          icon="💪"
        />
      </div>
    </div>
  );
};

export default CalendarView ;
