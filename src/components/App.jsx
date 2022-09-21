import React, { Component } from "react";
import { nanoid } from 'nanoid';

import { Box } from "./Box/Box";
import { Section } from './Section/Section';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

class App extends Component {
  state = {
  contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ],
  filter: '',
  }

  
  formSubmit = (data) => {
    const contact = {
      id: nanoid(),
      name: data.name,
      number: data.number,
    };

    this.includeContact(contact.name) ?
    alert(`${data.name} is alredy in your contacts`) :
    this.setState(({ contacts }) => ({ contacts: [contact, ...contacts] }))
  }

  changeFilter = (e) => {
    this.setState({filter: e.currentTarget.value});
  }

  getVisibleContacts = () => {
    const normalizeFilter = this.state.filter.toLowerCase();
    return this.state.contacts.filter(contact => contact.name.toLowerCase().includes(normalizeFilter));
  }

  deleteContact = (contactId) => {
    this.setState(prev => ({
      contacts: prev.contacts.filter(contact => contact.id !== contactId),
    }))
  };

  includeContact = (contactName) => {
    return this.state.contacts.find(contact => contact.name.toLowerCase() === contactName.toLowerCase())
  }
  
  render() {

    const visibleContacts = this.getVisibleContacts();

    return (
    <Box
        pt={5}
        pb={5}
        pl={5}
        pr={5}
        display='flex'
        flexDirection='column'
        alignItems='flex-start'
        as='main'
    >
        <Section title={'Phonebook'}>
          <ContactForm contacts={this.formSubmit} />
          <Section title={'Contacts'}>
            <Filter value={this.state.filter} change={this.changeFilter} />
            <ContactList contacts={visibleContacts} onDelete={this.deleteContact} />
          </Section>    
      </Section>
    </Box>
  );
  }
};

export default App;