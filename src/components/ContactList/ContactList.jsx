import React from 'react';

export const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ul>
      {contacts.map(contact => (
        <li key={contact.id}>
          <p>{contact.name}: {contact.number}</p>
          <button type='button' onClick={() => onDeleteContact(contact.id)}>Delete</button> 
          </li>
      ))}
    </ul>
  );
};
