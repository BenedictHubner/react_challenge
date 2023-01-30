import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {
  const handleNameChange = e => {
    setName(e.target.value);
  }
  const handlePhoneChange = e => {
    setPhone(e.target.value);
  }
  const handleEmailChange = e => {
    setEmail(e.target.value);
  }


  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={name} onChange={handleNameChange} required />
      <input type="tel" value={phone} onChange={handlePhoneChange} pattern="[0-9]{5}" required /> 
      <input type="email" value={email} onChange={handleEmailChange} required/>
      <input type="submit" />
    </form>
  );
};