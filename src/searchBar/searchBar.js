import React from 'react';
import './searchBar.css';


class SearchBar extends React.Component{
    constructor(props) {
        super(props);
        this.clickHandler = this.clickHandler.bind(this);
    }

    clickHandler(event){
        const bName = document.getElementsByClassName("bName")[0].value;
        const bLocation = document.getElementsByClassName("bLocation")[0].value;
        return [bName, bLocation]
    }

    render() {
        return(
            <div className="searchBarContainer">
                <ul>
                    <li>Best <br/>Match</li>
                    <li>Highest <br/>Rated</li>
                    <li>Most <br/>Reviewed</li>
                </ul>
                <hr/>
                <input className="bName" type="text" placeholder="Search by Name"/>
                <input className="bLocation" type="text" placeholder="Search by Location"/>
                <div className="button" ><button onClick={this.clickHandler}>Let's GO</button></div>
            </div>
        )
    }


}

export default SearchBar;