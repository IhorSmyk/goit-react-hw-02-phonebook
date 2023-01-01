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

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm />

        <h2>Contacts</h2>
        <Filter handleChangeFilter={null} value={null} />
        <ContactTable
          contacts={this.state.contacts}
          onDeleteContact={this.handleDeleteContact}
        />
      </div>
    );
  }
}

export default App;
