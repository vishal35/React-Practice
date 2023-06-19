import React from "react"
import RestaurantCard from "./RestaurantCard"
import { useState, useEffect } from "react"
import Shimmer from "./Shimmer"
import { Link } from "react-router-dom"

const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState([])
    const [filteredRestaurants, setFilteredRestaurants] = useState([])
    const [searchText, setSearchText] = useState("")

    useEffect(() => {
        fetchData()
    }, [])

    fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.1580785&lng=77.3166476&page_type=DESKTOP_WEB_LISTING")
        const json = await data.json()

        setListOfRestaurants(json?.data?.cards[2]?.data?.data?.cards)
        setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards)
    }

    return listOfRestaurants.length === 0 ? <Shimmer /> : (
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input type="searctext" className="search-box" value={searchText} onChange={(e) => {
                        setSearchText(e.target.value)
                    }} />
                    <button onClick={() => {
                        const filterRestaurant = listOfRestaurants.filter(res => res.data.name.toLowerCase().includes(searchText.toLowerCase()))
                        setFilteredRestaurants(filterRestaurant)
                    }}>Search</button>
                </div>
                <button className="filter-btn">Top Rated Restaurants</button>
            </div>
            <div className="res-container">
                {filteredRestaurants.map(res => (
                    <Link key={res.data.id} to={"restaurants/" + res.data.id}>
                        <RestaurantCard restData={res} />
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Body