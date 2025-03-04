import "./App.css";
import React, { useState } from "react";

export default function App() {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    confirmEmail: "",
    mobileNumber: "",
  });

  const handleInputChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;

    
    if (
      (name === "firstName" || name === "lastName") &&
      !/^[A-Za-z]*$/.test(value)
    ) {
      return;
    }
   
    if (name === "mobileNumber" && !/^\d*$/.test(value)) {
      return;
    }

    setValues((values) => ({
      ...values,
      [name]: value,
    }));
  };

  const [submitted, setSubmitted] = useState(false);
  const [valid, setValid] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      values.firstName &&
      values.lastName &&
      values.email &&
      values.confirmEmail &&
      values.mobileNumber
    ) {
      setValid(true);
    }
    setSubmitted(true);
  };

  return (
    <div className="form-container">
      <form className="register-form" onSubmit={handleSubmit}>
        {submitted && valid && (
          <div className="success-message">
            <h3>
              Welcome {values.firstName} {values.lastName}
            </h3>
            <div>Your registration was successful!</div>
          </div>
        )}

        {!valid && (
          <input
            className="form-field"
            type="text"
            placeholder="First Name"
            name="firstName"
            value={values.firstName}
            onChange={handleInputChange}
          />
        )}
        {submitted && !values.firstName && (
          <span id="first-name-error">Please enter a first name</span>
        )}

        {!valid && (
          <input
            className="form-field"
            type="text"
            placeholder="Last Name"
            name="lastName"
            value={values.lastName}
            onChange={handleInputChange}
          />
        )}
        {submitted && !values.lastName && (
          <span id="last-name-error">Please enter a last name</span>
        )}

        {!valid && (
          <input
            className="form-field"
            type="email"
            placeholder="Email"
            name="email"
            value={values.email}
            onChange={handleInputChange}
          />
        )}
        {submitted && !values.email && (
          <span id="email-error">Please enter an email address</span>
        )}

        {!valid && (
          <input
            className="form-field"
            type="email"
            placeholder="Confirm Email"
            name="confirmEmail"
            value={values.confirmEmail}
            onChange={handleInputChange}
          />
        )}
        {submitted && !values.confirmEmail && (
          <span id="confirmEmail-error">Please confirm your email</span>
        )}

        
        {!valid && (
          <input
            className="form-field"
            type="tel"
            placeholder="Mobile Number"
            name="mobileNumber"
            value={values.mobileNumber}
            onChange={handleInputChange}
          />
        )}
        {submitted && !values.mobileNumber && (
          <span id="mobile-error">Please enter a mobile number</span>
        )}

        {!valid && (
          <button className="form-field" type="submit">
            Register
          </button>
        )}
      </form>
    </div>
  );
}
