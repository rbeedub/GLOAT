import React from "react";


function Search( {setSearch, search} ) {

function handleChange(e) {
  setSearch(e.target.value);
}


  return (
    <div class="ui very padded left floated segment">
        <div className="searchbar">
            <label htmlFor="search">Search Jordans:</label>
            <input
              value={search}
              type="text"
              id="search"
              placeholder="Type a name to search..."
              onChange={handleChange}
            />
        </div>
      </div>
  );
}

export default Search;
