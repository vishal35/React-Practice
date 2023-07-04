import React from "react"
import RestaurantCard from "./RestaurantCard"
import { useState, useEffect } from "react"
import Shimmer from "./Shimmer"
import { Link } from "react-router-dom"
import { RESTAURANT_LIST } from '../utils/constant'
import useOnline from "../utils/useOnline"

const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState([])
    const [filteredRestaurants, setFilteredRestaurants] = useState([])
    const [searchText, setSearchText] = useState("")

    const isOnline = useOnline()

    if (!isOnline) {
        return <h1>Offline, please check your internet connection!!</h1>
    }

    useEffect(() => {
        fetchData()
    }, [])

    fetchData = async () => {
        const data = await fetch(RESTAURANT_LIST)
        const json = await data.json()

        setListOfRestaurants(json?.data?.cards[2]?.data?.data?.cards)
        setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards)
    }

    return listOfRestaurants.length === 0 ? <Shimmer /> : (
        <div className="body">
            <div className="filter">
                <div className="search p-5 bg-pink-50 my-2">
                    <input data-testid="search-input" type="searctext" className="search-box focus:bg-green-50" value={searchText} onChange={(e) => {
                        setSearchText(e.target.value)
                    }} />
                    <button data-testid="search-btn" className="p-2 m-2 bg-purple-900 text-white rounded-md hover:bg-gray-500" onClick={() => {
                        const filterRestaurant = listOfRestaurants.filter(res => res.data.name.toLowerCase().includes(searchText.toLowerCase()))
                        setFilteredRestaurants(filterRestaurant)
                    }}>Search</button>
                </div>
                <button className="filter-btn">Top Rated Restaurants</button>
            </div>
            <div data-testid="rest-list" className="flex flex-wrap">
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