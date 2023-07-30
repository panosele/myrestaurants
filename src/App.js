import React from 'react';
import './App.css';
import SearchBar from './searchBar/searchBar';
import Bussiness from "./bussiness/bussiness";
import BussinessList from "./bussinessList/bussinessList";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>The Best Restaurants</h1>
        <SearchBar />
        <BussinessList />
      </header>
    </div>
  );
}

export default App;
