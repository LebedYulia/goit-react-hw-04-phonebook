import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form, Label, Button } from './ContactForm.styled'


export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };
  

  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
  };
  
  reset = () => {
    this.setState({
      name: '',
      number: '',
    });
  };
  
  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Label htmlFor="name">Name
        <input
          type="text"
          name="name"          
          value={this.state.name}
          onChange={this.handleChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        </Label>
        <Label htmlFor="tel">Number
        <input 
        type="tel"
        name="number"
        value={this.state.number}
        onChange={this.handleChange}
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required        
        />
        </Label>
        <Button type="submit">Add contact</Button>
      </Form>
    );
  }
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}

