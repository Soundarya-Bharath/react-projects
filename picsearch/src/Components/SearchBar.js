import { useState } from "react";

function SearchBar({ onSubmit }) {
  // const handleClick = () => {
  //   onSubmit("Cars");
  // };

  const [term, setTerm] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(e);
    onSubmit(term);
  };
  const handleInputChange = (e) => {
    setTerm(e.target.value);
  };
  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <input value={term} onChange={handleInputChange} />
      </form>
      {/* <button onClick={handleClick}>Search</button> */}
    </div>
  );
}

export default SearchBar;
