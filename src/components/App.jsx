import { Component } from 'react';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactTable from './ContactTable/ContactTable';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  handleDeleteContact = idToDelete => {
    this.setState(prev => ({
      contacts: prev.contacts.filter(contact => contact.id !== idToDelete),
    }));
  };

  getFilteredContacts = e => {
    this.setState({
      filter: e.target.value,
    });
  };

  handleAddContact = newContact => {
    console.log(newContact);
    this.state.contacts.some(
      ({ name }) => name.toLowerCase() === newContact.name.toLowerCase()
    )
      ? alert(`a contact with the name ${newContact.name} already exists`)
      : this.setState(prev => ({contacts: [].concat(newContact, prev.contacts)}))
  };

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm add={this.handleAddContact} />
        <h2>Contacts</h2>
        <Filter
          handleChangeFilter={this.getFilteredContacts}
          value={this.state.filter}
        />
        <ContactTable
          contacts={this.state.contacts}
          onDeleteContact={this.handleDeleteContact}
        />
      </div>
    );
  }
}

export default App;
