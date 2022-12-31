import { Component } from 'react';
// import InputForm from './InfutForm/InputForm';
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
    name: '',
    number: '',
  };

  handleDeleteContact = idToDelete => {
    this.setState(prev => ({
      contacts: prev.contacts.filter(contact => contact.id !== idToDelete),
    }));
  };

  render() {
    return (
      <div>
        <ContactTable
          contacts={this.state.contacts}
          onDeleteContact={this.handleDeleteContact}
        />
      </div>
    );
  }
}

export default App;
