import React from "react";

const days = ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"];

// Simulated appointment activity: array of arrays with bar heights (percentages)
const activityData = [
  [40, 70, 50],
  [60, 35, 20],
  [30, 60, 45],
  [50, 35, 70],
  [80, 50, 60],
  [55, 30, 45],
  [40, 70, 50],
];

const ActivityFeed = () => {
  return (
    <div className="activity-card light-card">
      <div className="activity-header">
        <h4>Activity</h4>
        <span>3 appointment on this week</span>
      </div>
      <div className="activity-chart">
        {activityData.map((group, idx) => (
          <div key={idx} className="activity-day">
            <div className="bars">
              {group.map((height, i) => (
                <div
                  key={i}
                  className={`bar bar-${i}`}
                  style={{ height: `${height}%` }}
                />
              ))}
            </div>
            <span className="day-label">{days[idx]}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivityFeed;
