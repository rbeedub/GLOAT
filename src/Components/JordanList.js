import React from "react";
import JordanCard from "./JordanCard";
import Filter from './Filter';
import Search from './Search';
import { Card } from "semantic-ui-react";


function JordanList( {jordanArray, sortBy, onChangeSortBy, search, setSearch, handleFavorite } ) {

const jordanDetails = jordanArray.map((shoe) => {
  return <JordanCard key={shoe.id} {...shoe} handleFavorite={handleFavorite}  />;
})

  return (
    <>
        <div class="ui center aligned segment">
          <Search
            search={search}
            setSearch={setSearch}/>
          
          <Filter
            sortBy={sortBy}
            onChangeSortBy={onChangeSortBy}/>
        
          <br></br>

          <Card.Group itemsPerRow={5}>

         {jordanDetails}
           </Card.Group>
        </div>
    
  </>  
  );
}

export default JordanList;
