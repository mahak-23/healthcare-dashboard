import React from "react";
import healthStatus from "../../data/healthStatus";

const HealthStatusCards = () => {
  return (
    <div className="health-status-container">
      {healthStatus.map((card, idx) => (
        <div key={idx} className="health-status-card light-card">
          <div className="icon-title">
            <img
              src={card.img}
              alt={card.title}
              className="status-icon"
              loading="lazy"
            />
            <h4>{card.title}</h4>
          </div>
          <p className="status-date">Date: {card.date}</p>
          <div className="progress-bar">
            <div
              className={`progress-fill ${card.status.toLowerCase()}`}
              style={{ width: `${card.progress}%` }}
            ></div>
          </div>
        </div>
      ))}
      <div className="details-link">
        <a href="/" onClick={(e) => e.preventDefault()}>
          Details →
        </a>
      </div>
    </div>
  );
};

export default HealthStatusCards;
