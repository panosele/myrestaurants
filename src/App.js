import React, {useState} from 'react';
import './App.css';
import SearchBar from './searchBar/searchBar';
import BussinessList from "./bussinessList/bussinessList";

function App(props) {

    const [sortingOption, setSortingOption] = useState("");
    const [searchBusiness, setSearchBusiness] = useState("");
    const [searchLocation, setSearchLocation] = useState("");
    const changeSortingOption = (newOption) => {
        setSortingOption(newOption);
    }
    const changeSearchBusiness = (newOption) => {
        setSearchBusiness(newOption);
    }
    const changeSearchLocation = (newOption) => {
        setSearchLocation(newOption);
    }


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
        <SearchBar changeSortingOption={changeSortingOption}
                   changeSearchBusiness={changeSearchBusiness}
                   changeSearchLocation={changeSearchLocation}
                   bName={""}
                   bLocation={""}/>
        <BussinessList list={LIST}/>
      </header>
    </div>
  );
}

export default App;
