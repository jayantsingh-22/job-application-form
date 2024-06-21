import React from "react";
import useValidation from "../hooks/useValidation";
import useForm from "../hooks/useForm";

const Form = ({ onSubmit }) => {
  const { formData, handleChange, handleCheckboxChange, resetForm } = useForm({
    fullName: "",
    email: "",
    phoneNumber: "",
    position: "",
    relevantExperience: "",
    portfolioURL: "",
    managementExperience: "",
    additionalSkills: [],
    interviewTime: "",
  });

  const { errors, validateForm, validateField } = useValidation(formData);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      onSubmit(formData);
      resetForm();
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-field">
        <label>Full Name</label>
        <input
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          onBlur={() => validateField("fullName")}
        />
        {errors.fullName && <span className="error">{errors.fullName}</span>}
      </div>

      <div className="form-field">
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          onBlur={() => validateField("email")}
        />
        {errors.email && <span className="error">{errors.email}</span>}
      </div>

      <div className="form-field">
        <label>Phone Number</label>
        <input
          type="number"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
          onBlur={() => validateField("phoneNumber")}
        />
        {errors.phoneNumber && (
          <span className="error">{errors.phoneNumber}</span>
        )}
      </div>

      <div className="form-field">
        <label>Applying for Position</label>
        <select
          name="position"
          value={formData.position}
          onChange={handleChange}
          onBlur={() => validateField("position")}
        >
          <option value="">Select</option>
          <option value="Developer">Developer</option>
          <option value="Designer">Designer</option>
          <option value="Manager">Manager</option>
        </select>
        {errors.position && <span className="error">{errors.position}</span>}
      </div>

      {["Developer", "Designer"].includes(formData.position) && (
        <div className="form-field">
          <label>Relevant Experience (years)</label>
          <input
            type="number"
            name="relevantExperience"
            value={formData.relevantExperience}
            onChange={handleChange}
            onBlur={() => validateField("relevantExperience")}
          />
          {errors.relevantExperience && (
            <span className="error">{errors.relevantExperience}</span>
          )}
        </div>
      )}

      {formData.position === "Designer" && (
        <div className="form-field">
          <label>Portfolio URL</label>
          <input
            type="text"
            name="portfolioURL"
            value={formData.portfolioURL}
            onChange={handleChange}
            onBlur={() => validateField("portfolioURL")}
          />
          {errors.portfolioURL && (
            <span className="error">{errors.portfolioURL}</span>
          )}
        </div>
      )}

      {formData.position === "Manager" && (
        <div className="form-field">
          <label>Management Experience</label>
          <textarea
            name="managementExperience"
            value={formData.managementExperience}
            onChange={handleChange}
            onBlur={() => validateField("managementExperience")}
          />
          {errors.managementExperience && (
            <span className="error">{errors.managementExperience}</span>
          )}
        </div>
      )}

      <div className="form-field">
        <label>Additional Skills</label>
        <div className="checkbox-group">
          <label>
            <input
              type="checkbox"
              name="additionalSkills"
              value="JavaScript"
              checked={formData.additionalSkills.includes("JavaScript")}
              onChange={handleCheckboxChange}
            />{" "}
            JavaScript
          </label>

          <label>
            <input
              type="checkbox"
              name="additionalSkills"
              value="CSS"
              checked={formData.additionalSkills.includes("CSS")}
              onChange={handleCheckboxChange}
            />
            CSS
          </label>

          <label>
            <input
              type="checkbox"
              name="additionalSkills"
              value="Python"
              checked={formData.additionalSkills.includes("Python")}
              onChange={handleCheckboxChange}
            />
            Python
          </label>
        </div>
        {errors.additionalSkills && (
          <span className="errors">{errors.additionalSkills}</span>
        )}
      </div>

      <div className="form-field">
        <label>Preferred Interview Time</label>
        <input
          type="datetime-local"
          name="interviewTime"
          value={formData.interviewTime}
          onChange={handleChange}
          onBlur={() => validateField("interviewTime")}
        />
        {errors.interviewTime && (
          <span className="errors">{errors.interviewTime}</span>
        )}
      </div>
      <button type="submit">Submit</button>
      <button type="reset" onClick={resetForm}>
        Reset
      </button>
    </form>
  );
};

export default Form;
