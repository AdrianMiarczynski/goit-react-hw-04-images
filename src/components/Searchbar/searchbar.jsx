import css from './searchbar.module.css';
import PropTypes from 'prop-types';
const { Component } = require('react');
class SearchBar extends Component {
  render() {
    return (
      <header className={css.Searchbar}>
        <form onSubmit={this.props.getData} className={css.SearchForm}>
          <button type="submit" className={css['SearchForm-button']}>
            <span className={css['SearchForm-button-label']}>Search</span>
          </button>

          <input
            className={css['SearchForm-input']}
            type="text"
            autoComplete="off"
            name="search"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}
export default SearchBar;

SearchBar.propTypes = {
  getData: PropTypes.func.isRequired,
};
