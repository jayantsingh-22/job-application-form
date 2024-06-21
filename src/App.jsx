import React, { useState } from "react";
import Form from "./components/Form";
import Summary from "./components/Summary";
import "./styles.css";
import Footer from "./components/Footer";

const App = () => {
  const [formData, setFormData] = useState(null);

  const handleFormSubmit = (data) => {
    setFormData(data);
  };

  return (
    <div className="App">
      <h1>Job Application Form</h1>
      <Form onSubmit={handleFormSubmit} />
      {formData && <Summary formData={formData} />}
      <Footer />
    </div>
  );
};

export default App;
