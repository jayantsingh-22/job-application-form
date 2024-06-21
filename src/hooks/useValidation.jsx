import { useState } from "react";

const useValidation = (formData) => {
  const [errors, setErrors] = useState({});

  const validateField = (name) => {
    let error = "";

    switch (name) {
      case "fullName":
        if (!formData.fullName) {
          error = "Full Name is required";
        }
        break;
      case "email":
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formData.email) {
          error = "Email is required";
        } else if (!emailRegex.test(formData.email)) {
          error = "Email is not valid";
        }
        break;
      case "phoneNumber":
        if (!formData.phoneNumber) {
          error = "Phone Number is required";
        } else if (isNaN(formData.phoneNumber) || formData.phoneNumber <= 0) {
          error = "Phone Number must be a valid number";
        }
        break;
      case "position":
        if (!formData.position) {
          error = "Position is required";
        }
        break;
      case "relevantExperience":
        if (
          ["Developer", "Designer"].includes(formData.position) &&
          (!formData.relevantExperience || formData.relevantExperience <= 0)
        ) {
          error = "Relevant Experience is required and must be greater than 0";
        }
        break;
      case "portfolioURL":
        const urlRegex = /^(ftp|http|https):\/\/[^ "]+$/;
        if (
          formData.position === "Designer" &&
          (!formData.portfolioURL || !urlRegex.test(formData.portfolioURL))
        ) {
          error = "Portfolio URL is required and must be a valid URL";
        }
        break;
      case "managementExperience":
        if (formData.position === "Manager" && !formData.managementExperience) {
          error = "Management Experience is required";
        }
        break;
      case "additionalSkills":
        if (formData.additionalSkills.length === 0) {
          error = "At least one skill must be selected";
        }
        break;
      case "interviewTime":
        if (!formData.interviewTime) {
          error = "Preferred Interview Time is required";
        }
        break;
      default:
        break;
    }

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: error,
    }));
  };

  const validateForm = () => {
    const fieldNames = Object.keys(formData);
    fieldNames.forEach((fieldName) => {
      validateField(fieldName);
    });

    const valid = Object.values(errors).every((error) => error === "");

    return valid;
  };

  return {
    errors,
    validateField,
    validateForm,
  };
};

export default useValidation;
