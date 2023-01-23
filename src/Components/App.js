
import React from 'react';
import Favorites from './Favorites';
import Home from './Home';
import About from './About';
import JordanList from './JordanList';
import Form from './Form';
import Header from './Header';
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

  return (
    <div className="App">
     <Header />

 <Switch>  
    <Route path ="/jordans/form">
     <Form />
    </Route>


    <Route exact path="/">
     <Home />      
    </Route>
    
   
    <Route path="/about"> 
     <About />
    </Route>

    <Route path="/jordans/favorites">
     <Favorites />
    </Route>
    


     <Route path ="/jordans"> 
     <JordanList
      jordanArray={filteredArray}
      sortBy={sortBy}
      onChangeSortBy={setSortBy}
      search={search}
      setSearch={setSearch} />
     </Route> 

      

 </Switch>
      </div>
    
   );
}

export default App;
