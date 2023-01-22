
import './App.css';
import React from 'react';
import MenuHeader from './MenuHeader';
// import Search from './Search';
// import Filter from './Filter';
// import JordanList from './JordanList';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <p>
          G L O A T 
          <MenuHeader />
        </p>
      </header>
        {/* <div>
        <h1>G L O A T </h1>
          <MenuHeader />
          <Search />
          <Filter />
          <JordanList /> 
        </div> */}
    </div>
  );
}

export default App;
