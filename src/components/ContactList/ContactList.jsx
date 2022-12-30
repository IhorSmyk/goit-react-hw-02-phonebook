// import PropTypes from 'prop-types';
import s from './Contact.module.css';

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ul className={ s.contactList}>
      {contacts.map({id,name,number} => { 
        <li></li>
      })}

</ul>

  );
};

export default ContactList;
