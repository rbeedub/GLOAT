import React from "react";


function Search( {setSearch, search} ) {

function handleChange(e) {
  setSearch(e.target.value);
}


  return (

    <div class="ui raised padded left floated segment">

        <div class="ui small icon input">
        <i class="search icon"></i>
            <input
              value={search}
              type="text"
              id="search"
              placeholder="Type a model to search..."
              onChange={handleChange}
            />
        </div>
      </div>
  );
}

export default Search;

