import PropTypes from 'prop-types';
import s from './Finder.module.css';

const Filter = ({ handleChangeFilter, value }) => {
  return (
    <input
      className={s.filter}
      type="text"
      name="name"
      placeholder='Search contact'
      pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
      onChange={handleChangeFilter}
    />
  );
};

Filter.propTypes = {

}
