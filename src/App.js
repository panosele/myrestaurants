import React, {useState} from 'react';
import './App.css';
import SearchBar from './searchBar/searchBar';
import BussinessList from "./bussinessList/bussinessList";
import searchAPI from './utils/utils'

function App(props) {

    const [sortingOption, setSortingOption] = useState("");
    const [searchBusiness, setSearchBusiness] = useState("");
    const [searchLocation, setSearchLocation] = useState("");
    const [LIST, setLIST] = useState([])
    const changeSortingOption = (newOption) => {
        setSortingOption(newOption);
    }
    const changeSearchBusiness = (newOption) => {
        setSearchBusiness(newOption);
    }
    const changeSearchLocation = (newOption) => {
        setSearchLocation(newOption);
    }
    const changeLIST = (newLIST) => {
        setLIST(newLIST);
    }


    const onChangeTheList = () => {
        setTimeout(()=> {
            const JSON_LIST = searchAPI(searchBusiness, searchLocation, sortingOption);
            const businessesFromJson = JSON_LIST.businesses;
            console.log(businessesFromJson);
            for (let prop in businessesFromJson){
                LIST.push({
                    id: prop,
                    src: businessesFromJson[prop].image_url,
                    name: businessesFromJson[prop].name,
                    p1: businessesFromJson[prop].location.display_address[0],
                    p2: businessesFromJson[prop].location.city,
                    p3: businessesFromJson[prop].location.state + " " + businessesFromJson[prop].location.zip_code,
                    p4: businessesFromJson[prop].categories[0].alias.toUpperCase(),
                    p5: businessesFromJson[prop].rating + " " + "stars",
                    p6: businessesFromJson[prop].review_count + " " + "reviews"
                })
            }
            console.log(LIST);
        }, 1000)
    }

  return (
    <div className="App">
      <header className="App-header">
        <h1>The Best Restaurants</h1>
        <SearchBar changeSortingOption={changeSortingOption}
                   changeSearchBusiness={changeSearchBusiness}
                   changeSearchLocation={changeSearchLocation}
                   onChange={onChangeTheList}
                   bName={""}
                   bLocation={""}/>
        <BussinessList list={LIST}/>
      </header>

    </div>
  );
}

export default App;
