import React from "react";
import JordanCard from "./JordanCard";
import Filter from './Filter';
import Search from './Search';


function JordanList( {jordanArray, sortBy, onChangeSortBy, search, setSearch} ) {

const { id } = jordanArray
console.log(jordanArray);

const jordanDetails = jordanArray.map((shoe) => {
  return <JordanCard key={id} {...shoe} />;
})

  return (
    <>
    <div>        {/* <div class="ui center aligned segment"> */}
        <Search
          search={search}
          setSearch={setSearch}/>
        
        <Filter
           sortBy={sortBy}
           onChangeSortBy={onChangeSortBy}/>
          <br></br>
          <h1>J O R D A N S</h1>
          <br></br>
          <ul className="cards"> 
         {jordanDetails}
          </ul>
        </div>
      
      
  </>  
  );
}

export default JordanList;
