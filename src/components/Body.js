import React from "react"
import RestaurantCard from "./RestaurantCard"
import restList from "../utils/mockData"
import { useState } from "react"

const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState(restList)
    // const listOfRestaurants = []
    const handleButtonClick = () => {
        const filteredList = restList.filter(res => res.data.avgRating > 3.8)
        setListOfRestaurants(filteredList)
    }

    return (
        <div className="body">
            <div className="filter">
                <button className="filter-btn" onClick={() => handleButtonClick()}>Top Rated Restaurants</button>
            </div>
            <div className="res-container">
                {listOfRestaurants.map(res => <RestaurantCard key={res.data.id} restData={res} />)}
            </div>
        </div>
    )
}

export default Body