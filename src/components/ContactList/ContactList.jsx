// import PropTypes from 'prop-types';
import s from './ContactList.module.css';

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ul className={s.contactList}>
      {contacts.map(({ id, name, number }) => {
        return (
          <li key={id}>
            {name} <br /> {number}
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;
