import React from "react";


function Search( {setSearch, search} ) {

function handleChange(e) {
  setSearch(e.target.value);
}


  return (
    <div className="searchbar">
      <h1>SEARCH</h1>
        <label htmlFor="search">Search Jordans:</label>
        <input
          value={search}
          type="text"
          id="search"
          placeholder="Type a name to search..."
          onChange={handleChange}
        />
    </div>
  );
}

export default Search;
