import { Component } from 'react';
import PropTypes from 'prop-types';
import s from './ContactForm.module.css';

class InputForm extends Component {
  state = {
    name: '',
    number: '',
  };

  render() {
    return (
      <>
        <form action="submit" onSubmit={0}>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />

          <label htmlFor="number">Number</label>
          <input
            id="number"
            type="text"
            name="number"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <button type="submit">Add contact to the list</button>
        </form>
      </>
    );
  }
}

export default InputForm;
