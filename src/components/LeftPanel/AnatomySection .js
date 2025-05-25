import React from "react";
import anatomyImg from "../../assets/images/anatomy-placeholder.png";

const AnatomySection = () => {
  return (
    <div className="anatomy-image-wrapper light-card">
      <img
        src={anatomyImg}
        alt="Anatomy"
        className="anatomy-img"
        loading="lazy"
      />
      <div className="indicator heart">
        ❤️
        <span>Healthy Heart</span>
      </div>
      <div className="indicator leg">
        🦵
        <span>Healthy Leg</span>
      </div>
    </div>
  );
};

export default AnatomySection;
