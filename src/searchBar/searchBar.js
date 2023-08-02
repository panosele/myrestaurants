import React from 'react';
import './searchBar.css';

const sortingOptions = ["best_match", "rating", "review_count"]

class SearchBar extends React.Component{
    constructor(props) {
        super(props);
        this.clickSortingHandle = this.clickSortingHandle.bind(this);
        this.clickButtonHandler = this.clickButtonHandler.bind(this);
    }

    clickButtonHandler(event){
        const bName = document.getElementsByClassName("bName")[0].value;
        const bLocation = document.getElementsByClassName("bLocation")[0].value;
        this.props.changeSearchBusiness(bName);
        this.props.changeSearchLocation(bLocation);
    }

    clickSortingHandle(event){
        event.target.style.color = "goldenrod";
        const sorted = (sortingOptions[event.target.id]);
        this.props.changeSortingOption(sorted);
        sortingOptions.forEach((option) => {
            if (sortingOptions.indexOf(option).toString()!== event.target.id){
                document.getElementById(`${sortingOptions.indexOf(option)}`).style.color = "white";
            }
        })
    }

    render() {
        return(
            <div className="searchBarContainer">
                <ul>
                    <li  id="0"  onClick={this.clickSortingHandle}>Best <br/>Match</li>
                    <li  id="1" onClick={this.clickSortingHandle}>Highest <br/>Rated</li>
                    <li  id="2" onClick={this.clickSortingHandle}>Most <br/>Reviewed</li>
                </ul>
                <hr/>
                <input  className="bName" type="text" placeholder="Search by Name"/>
                <input className="bLocation" type="text" placeholder="Search by Location"/>
                <div className="button" onClick={this.props.onChange}><button id="but_search" onClick={this.clickButtonHandler}>Let's GO</button></div>
            </div>
        )
    }


}

export default SearchBar;