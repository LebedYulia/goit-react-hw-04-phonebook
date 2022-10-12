import React from 'react';
import PropTypes from 'prop-types';
import { ContactItem, ContactInfo } from './ContactList.styled';
import { Button } from 'components/ContactForm/ContactForm.styled';

export const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <ContactItem key={id}>
          <ContactInfo>
            {name}: {number}
          </ContactInfo>
          <Button type="button" onClick={() => onDeleteContact(id)}>
            Delete
          </Button>
        </ContactItem>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDeleteContact: PropTypes.func.isRequired,
};
