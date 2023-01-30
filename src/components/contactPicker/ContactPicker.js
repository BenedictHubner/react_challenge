import React from "react";

export const ContactPicker = props => {
  const contacts = props.contacts;
  const handleChange = props.handleChange;

  return (
    <select defaultValue="" onChange={handleChange}>
      <option key={0} value="">No contact selected</option>
      {contacts.map ( (contact, index) => {
        return <option key={index+1} value={contact.name}>{contact.name}</option>
      })}
    </select>
  );
};
