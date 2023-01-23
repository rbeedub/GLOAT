import React from "react";
import JordanCard from "./JordanCard";
import Filter from './Filter';
import Search from './Search';
import { useState } from "react";
import { useEffect } from "react";


function JordanList( {jordanArray, sortBy, onChangeSortBy, search, setSearch} ) {
//   const [jordanArray, setJordanArray] = useState ([])



//   useEffect(() => {
//     fetch('http://localhost:6001/jordans')
//       .then(response => response.json())
//       .then(setJordanArray)
//   }, []
// )

// // console.log(jordanArray)

// let filteredArray = jordanArray
//   .filter(shoe => shoe.model.toLowerCase().includes(search.toLowerCase()))
//   .sort((shoe1, shoe2) => {
//     if (sortBy === "price") {
//       return shoe1.price - shoe2.price
//     } else {
//       return shoe1.condition.localeCompare(shoe2.condition)
//     }
//   })


  const { id } = jordanArray
console.log(jordanArray);

const jordanDetails = jordanArray.map((shoe) => {
  return <JordanCard key={id} {...shoe} />;
})

  return (
    <>
      <div>
     
     
      </div>
      <div class="ui hidden divider">
        <div class="ui center aligned segment">
        <Search
          search={search}
          setSearch={setSearch}/>
        
        <Filter
           sortBy={sortBy}
           onChangeSortBy={onChangeSortBy}/>

          <br></br>
          <h1> JORDAN LIST </h1>
          <br></br>
          <ul className="cards"> 
          {jordanDetails}
          </ul>
        </div>
      </div>
      
  </>  
  );
}

export default JordanList;
