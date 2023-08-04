import React from 'react';
import './searchBar.css';

const sortingOptions = ["best_match", "rating", "review_count"]

class SearchBar extends React.Component{
    constructor(props) {
        super(props);
        this.clickSortingHandle = this.clickSortingHandle.bind(this);
        this.onInputForBusinessHandler = this.onInputForBusinessHandler.bind(this);
        this.onInputForLocationHandler = this.onInputForLocationHandler.bind(this);
        // this.clickButtonHandler = this.clickButtonHandler.bind(this);
    }

    onInputForBusinessHandler(e){
        // const bName = document.getElementsByClassName("bName")[0].value;
        this.props.changeSearchBusiness(e.target.value);
        // console.log(e.target.value)
        // console.log(this.props.SearchBusiness)
    }

    onInputForLocationHandler(e){
        // const bLocation = document.getElementsByClassName("bLocation")[0].value;
        this.props.changeSearchLocation(e.target.value);
    }

    // clickButtonHandler(event){
    //     const bName = document.getElementsByClassName("bName")[0].value;
    //     const bLocation = document.getElementsByClassName("bLocation")[0].value;
    //     this.props.changeSearchBusiness(bName);
    //     this.props.changeSearchLocation(bLocation);
    // }

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
                <input  onInput={this.onInputForBusinessHandler} className="bName" type="text" placeholder="Search by Name"/>
                <input onInput={this.onInputForLocationHandler} className="bLocation" type="text" placeholder="Search by Location"/>
                <div className="button" onClick={this.props.onChange}><button id="but_search" onClick={this.clickButtonHandler}>Let's GO</button></div>
            </div>
        )
    }


}

export default SearchBar;