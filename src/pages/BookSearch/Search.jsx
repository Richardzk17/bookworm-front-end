//css
import styles from '../BookSearch/BookSearch.module.css'

function Search({ term, searchKeyword }) {
    function handleSearch(e) {
      searchKeyword(e.target.value);
    }
    return (
      <div className={styles.center}>
        <input
          className={styles.inputField}
          type="text"
          value={term}
          placeholder="Search"
          onChange={handleSearch}
        ></input>
      </div>
    );
  }
  
  export default Search;
  