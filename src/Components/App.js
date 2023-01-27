
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
import Cart from './Cart';




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
  return <Favorites key={shoe.id} {...shoe} removeFromFavorites={removeFromFavorites} noDuplicatesInCart={noDuplicatesInCart} 
  handleCart={handleCart} />
})

let cartFiltered = jordanArray
.filter(shoe => shoe.inCart)
.map(shoe => {
  return <Cart key={shoe.id} {...shoe} removeFromFavorites={removeFromFavorites} noDuplicatesInCart={noDuplicatesInCart} 
  handleCart={handleCart}/>
})

function noDuplicatesInCart(jordanObj) {
  const target = jordanArray.find(shoe => shoe.id === jordanObj.id)
  if (!target) {
    setJordanArray([ ...jordanArray, jordanObj])
  } 
}
 
 function handleCart(jordanObj) {
  const updatedJordansInCart= jordanArray.map((shoe) => shoe.id === jordanObj.id ? jordanObj: shoe)
  setJordanArray(updatedJordansInCart)
}

function handleFavorite(jordanObj) {
  const updatedJordans= jordanArray.map((shoe) => shoe.id === jordanObj.id ? jordanObj: shoe)
  setJordanArray(updatedJordans)
}

function removeFromFavorites(jordanObj) {
  console.log(`Delete me!`)
  const removeJordans = jordanArray.filter(shoe => shoe.id !== jordanObj.id)
  setJordanArray(removeJordans)
}


function onFormSubmit(newShoe){
  setJordanArray([...jordanArray, newShoe])
}



  return (
    <div className="App">

     <Header />

 <Switch>  
    <Route path= "/jordans/cart">
      {cartFiltered}  
    </Route>

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
     {favoritesFiltered.length === 0 ? <h1 style={{textAlign: 'center'}}>No favorites yet!</h1> : favoritesFiltered} 
    </Route>
    


     <Route path ="/jordans"> 
     <JordanList
      jordanArray={filteredArray}
      sortBy={sortBy}
      onChangeSortBy={setSortBy}
      search={search}
      setSearch={setSearch} 
      handleFavorite={handleFavorite}
      />
     </Route> 

    
    
 </Switch>


      </div>
    
   );
}

export default App;
