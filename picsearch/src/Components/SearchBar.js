import "./SearchBar.css";
import { useState } from "react";

function SearchBar({ onSubmit }) {
  const [term, setTerm] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    onSubmit(term);
  };
  const handleInputChange = (e) => {
    setTerm(e.target.value);
  };
  return (
    <div>
      <h3 className="heading">Image Search App</h3>
      <div className="search-bar">
        <form onSubmit={handleFormSubmit}>
          <label>Enter Search Term</label>
          <input value={term} onChange={handleInputChange} />
          <button value={term} onClick={handleInputChange}>
            Search
          </button>
        </form>
      </div>
    </div>
  );
}

export default SearchBar;
