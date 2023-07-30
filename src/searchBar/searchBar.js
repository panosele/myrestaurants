import React from 'react';
import './searchBar.css';
// eslint-disable-next-line

class SearchBar extends React.Component{

    render() {
        return(
            <div className="searchBarContainer">
                <ul>
                    <li>Best <br/>Match</li>
                    <li>Highest <br/>Rated</li>
                    <li>Most <br/>Reviewed</li>
                </ul>
                <hr/>
                <input placeholder="Search by Name"/>
                <input placeholder="Search by Location"/>
                <div className="button"><button>Let's GO</button></div>
            </div>
        )
    }


}

export default SearchBar;