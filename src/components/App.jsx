import { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({
      [name]: value,
    });
  };

  addContact = data => {
    const contact = {
      id: nanoid(),
      name: data.name,
      number: data.number,
    };

    this.setState(({ contacts }) => ({
      contacts: [contact, ...contacts],
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
    const {  filter } = this.state;
    const visibleContacts = this.findContacstByName();
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addContact} />

        <h2>Contacts</h2>
        <Filter value={filter} onChange={this.handleChange} />
        <ContactList contacts={visibleContacts} />
      </div>
    );
  }
}
