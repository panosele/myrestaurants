
const keyAPI = process.env.API_KEY;

let respJSON = "";
function searchAPI(searchBusiness, location, sorting){
    const options = {method: 'GET',
        headers: {accept: 'application/json', Authorization: "Bearer " + keyAPI},
    };

    fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?location=${location}&term=${searchBusiness}&sort_by=${sorting}`, options)
        .then(response => response.json())
        .then(data => {
            respJSON = data;
        })
        .catch(err => console.error(err));

    return respJSON;
}


export default searchAPI;