import { Component } from 'react';
import { nanoid } from 'nanoid';
import { Section } from './Section/Section';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({
      [name]: value,
    });
  };

  addContact = ({ name, number }) => {
    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    const contacts = this.state.contacts;
    const containName = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (containName) {
      return alert(`${name} is alredy in contacts`);
    }
    this.setState(prevState => ({
      contacts: [newContact, ...contacts],
    }));
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  findContacstByName = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    const { filter } = this.state;
    const visibleContacts = this.findContacstByName();

    return (
      <div>
        <Section title={'Phonebook'}>
          <ContactForm onSubmit={this.addContact} />
        </Section>

        <Section title={'Contacts'}>        
          <Filter 
              value={filter} 
              onChange={this.handleChange} />
          <ContactList
              contacts={visibleContacts}
              onDeleteContact={this.deleteContact}  />
        </Section>
      </div>
    );
  }
}
