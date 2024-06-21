import React from "react";
import "./Summary.css";

const Summary = ({ formData }) => {
  return (
    <div className="summary-container">
      <h3>Application Summary</h3>
      <div className="summary-item">
        <span className="summary-label">Full Name:</span> {formData.fullName}
      </div>
      <div className="summary-item">
        <span className="summary-label">Email:</span> {formData.email}
      </div>
      <div className="summary-item">
        <span className="summary-label">Phone Number:</span>{" "}
        {formData.phoneNumber}
      </div>
      <div className="summary-item">
        <span className="summary-label">Position:</span> {formData.position}
      </div>
      {["Developer", "Designer"].includes(formData.position) && (
        <div className="summary-item">
          <span className="summary-label">Relevant Experience:</span>{" "}
          {formData.relevantExperience}
        </div>
      )}
      {formData.position === "Designer" && (
        <div className="summary-item">
          <span className="summary-label">Portfolio URL:</span>{" "}
          {formData.portfolioURL}
        </div>
      )}
      {formData.position === "Manager" && (
        <div className="summary-item">
          <span className="summary-label">Management Experience: </span> {" "}
          {formData.managementExperience}
        </div>
      )}
      <div className="summary-item">
        <span className="summary-label">Additional Skills:</span>{" "}
        {formData.additionalSkills.join(", ")}
      </div>
      <div className="summary-item">
        <span className="summary-label">Preferred Interview Time:</span>
        {"  "}
        {formData.interviewTime}
      </div>
    </div>
  );
};

export default Summary;
