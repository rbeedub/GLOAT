
import React from 'react';
import Favorites from './Favorites';
import Home from './Home';
import About from './About';
import JordanList from './JordanList';
import Header from './Header';
import SellForm from './SellForm';
import '../index.css'
import { useState } from "react";
import { useEffect } from "react";
import { Switch, Route } from 'react-router-dom';




function App() {
  

  const [jordanArray, setJordanArray] = useState ([])

  const [search, setSearch] = useState('')
  const [sortBy, setSortBy] = useState("size")


  useEffect(() => {
    fetch('http://localhost:6001/jordans')
      .then(response => response.json())
      .then(setJordanArray)
  }, []
)


let filteredArray = jordanArray
  .filter(shoe => shoe.model.toLowerCase().includes(search.toLowerCase()))
  .sort((shoe1, shoe2) => {
    if (sortBy === "price") {
      return shoe1.price - shoe2.price
    } else if (sortBy === "condition"){
      return shoe1.condition.localeCompare(shoe2.condition)
    }
  })

let favoritesFiltered = jordanArray
.filter(shoe => shoe.isWanted)
.map(shoe => {
  return <Favorites key={shoe.id} {...shoe}/>
})

function handleFavorite(jordanObj) {
  const updatedJordans= jordanArray.map((shoe) => shoe.id === jordanObj.id ? jordanObj: shoe)
  setJordanArray(updatedJordans)
}


  function onFormSubmit(newShoe){
    setJordanArray([...jordanArray, newShoe])
  }


  return (
    <div className="App">

     <Header />

 <Switch>  
    <Route path ="/jordans/new">
     <SellForm 
     onFormSubmit={onFormSubmit}
     />
    </Route>


    <Route exact path="/">
     <Home />      
    </Route>
    
   
    <Route path="/about"> 
     <About />
    </Route>

    <Route path="/jordans/favorites">
     {favoritesFiltered} 
    </Route>
    


     <Route path ="/jordans"> 
     <JordanList
      jordanArray={filteredArray}
      sortBy={sortBy}
      onChangeSortBy={setSortBy}
      search={search}
      setSearch={setSearch} 
      handleFavorite={handleFavorite}/>
     </Route> 

    
 </Switch>


      </div>
    
   );
}

export default App;
