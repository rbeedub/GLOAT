
import React from 'react';
import Search from './Search';
import About from './About';
// import Filter from './Filter';
import JordanList from './JordanList';
import '../index.css'


function App() {

  return (
    <div className="App">
      <header className="App-header">
          G L O A T 
      </header>
      <div>
      <Search />
      <About />
      <JordanList />
  
      </div>
    </div>
  );
}

export default App;
