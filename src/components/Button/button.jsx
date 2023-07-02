import css from './button.module.css';
import PropTypes from 'prop-types';
const Button = ({ nextPage }) => {
  return (
    <button onClick={nextPage} className={css['btn-load-more']}>
      Load more
    </button>
  );
};
export default Button;

Button.propTypes = {
  nextPage: PropTypes.func.isRequired,
};
