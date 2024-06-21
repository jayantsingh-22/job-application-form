import { useState } from "react";

const useForm = (initialState) => {
  const [formData, setFormData] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => {
      const currentValues = prevData[name] || [];
      if (currentValues.includes(value)) {
        return {
          ...prevData,
          [name]: currentValues.filter((item) => item !== value),
        };
      } else {
        return {
          ...prevData,
          [name]: [...currentValues, value],
        };
      }
    });
  };

  const resetForm = () => {
    setFormData(initialState);
  };

  return {
    formData,
    handleChange,
    handleCheckboxChange,
    resetForm,
  };
};

export default useForm;
