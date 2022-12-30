import { Component } from 'react';
import Section from './Section/Section';
import InputForm from './InfutForm/InputForm';
import ContactList from './ContactList/ContactList';

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

  render() {
    return (
      <div>
        <Section>
          <InputForm />
        </Section>
        <Section>
          <ContactList contacts={this.state.contacts} onDeleteContact={1} />
        </Section>
      </div>
    );
  }
}

export default App;
