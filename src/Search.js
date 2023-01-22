import React from "react";


function Search() {


  return (
    <div className="searchbar">
      <label htmlFor="search">Search Jordans:</label>
      <input
        // value={query}
        type="text"
        id="search"
        placeholder="Type a name to search..."
        // onChange={handleChange}
      />
    </div>
  );
}

export default Search;
