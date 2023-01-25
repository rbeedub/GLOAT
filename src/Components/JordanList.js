import React from "react";
import JordanCard from "./JordanCard";
import Filter from './Filter';
import Search from './Search';


function JordanList( {jordanArray, sortBy, onChangeSortBy, search, setSearch} ) {

const jordanDetails = jordanArray.map((shoe) => {
  return <JordanCard key={shoe.id} {...shoe} />;
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
          <h1> JORDANS </h1>
          <br></br>
     
          <br></br>
          <ul className="cards"> 
         {jordanDetails}
          </ul>
        </div>
      
      
  </>  
  );
}

export default JordanList;
