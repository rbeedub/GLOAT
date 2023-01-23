
import React from 'react';
import Search from './Search';
import About from './About';
import Filter from './Filter';
import JordanList from './JordanList';
import '../index.css'
import { useEffect } from 'react';
import { useState } from 'react';

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


  // console.log(jordanArray)

  let filteredArray = jordanArray
    .filter(shoe => shoe.model.toLowerCase().includes(search.toLowerCase()))
    .sort((shoe1, shoe2) => {
      if (sortBy === "price") {
        return shoe1.price - shoe2.price
      } else {
        return shoe1.condition.localeCompare(shoe2.condition)
      }
    })

  return (
    <div className="App">
      <header className="App-header">
          G L O A T 
      </header>
      <div>
      <Search
      setSearch={setSearch} 
      search={search}/>
      <Filter
      sortBy={sortBy}
      onChangeSortBy={setSortBy}

      />
      <About />
      <JordanList 
      jordanArray={filteredArray}/>
  
      </div>
    </div>
  );
}

export default App;
