import { Component } from 'react';
// import PropTypes from 'prop-types';
import s from './ContactForm.module.css';

class InputForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChangeName = e => {
    this.setState({ name: e.target.value });
  };

  handleChangeNumber = e => {
    this.setState({ number: e.target.value });
  };

  render() {
    return (
      <>
        <form className={s.form} action="submit" onSubmit={0}>
          <label htmlFor="name">
            Name
          </label>
          <input
            id="name"
            type="text"
            name="name"
            placeholder="Enter a name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={null}
            value={this.state.name}
          />

          <label htmlFor="number">
            Number
          </label>
          <input
            id="number"
            type="text"
            name="number"
            placeholder="Enter a number"
            pattern=" ^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$"
            title="Name may contain numbers"
            required
            onChange={null}
            value={this.state.number}
          />
          <button type="submit">Add contact to the list</button>
        </form>
      </>
    );
  }
}

export default InputForm;
