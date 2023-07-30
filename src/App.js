import React from 'react';
import './App.css';
import SearchBar from './searchBar/searchBar';
import BussinessList from "./bussinessList/bussinessList";

function App(props) {
    const LIST = [{src: "",
        name: "NAME",
        p1: "1",
        p2: "2",
        p3: "3",
        p4: "4",
        p5: "5",
        p6: "6",},
        {src: "",
        name: "NAME",
        p1: "1",
        p2: "2",
        p3: "3",
        p4: "4",
        p5: "5",
        p6: "6",},
        {src: "",
            name: "NAME",
            p1: "1",
            p2: "2",
            p3: "3",
            p4: "4",
            p5: "5",
            p6: "6",}]

  return (
    <div className="App">
      <header className="App-header">
        <h1>The Best Restaurants</h1>
        <SearchBar />
        <BussinessList list={LIST}/>
      </header>
    </div>
  );
}

export default App;
