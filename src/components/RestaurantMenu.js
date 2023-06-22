import { useEffect, useState } from "react"
import Shimmer from "./Shimmer"
import { useParams } from "react-router-dom"
import useRestaurant from "../utils/useRestaurant"
import { addItem } from "../utils/cartSlice"
import { useDispatch } from "react-redux"

const RestaurantMenu = () => {
    const { resId } = useParams()
    const restaurantInfo = useRestaurant(resId)

    if (!restaurantInfo) return <Shimmer />

    const { name, cuisines, costForTwoMessage, avgRating, area, city } = restaurantInfo?.cards[0]?.card?.card?.info
    const { itemCards } = restaurantInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card

    const dispatch = useDispatch();

    const handleAddItem = () => {
        dispatch(addItem("Grapes"))
    }

    const addFoodItem = (item) => {
        dispatch(addItem(item))
    }

    return (
        <div className="flex">
            <div>
                <h1>Restaurant id: {resId}</h1>
                <h2>{name}</h2>
                <h3>{avgRating}</h3>
                <h3>{area}</h3>
                <h3>{city}</h3>
                <p>{cuisines.join(", ")} - {costForTwoMessage}</p>
                <button className="p-2 m-5 bg-green-100" onClick={() => handleAddItem()}>Add Item</button>
            </div>
            <div className="p-5">
                <h2 className="text-xl font-bold">Menu</h2>
                <ul>
                    {itemCards.map((item) =>
                        <li className="p-1" key={item.card.info.id}>{item.card.info.name} - {item.card.info.price / 100} - <button className="p-2 bg-green-100" onClick={() => addFoodItem(item.card.info)} >Add</button>
                        </li>)}
                </ul>
            </div>

        </div>
    )
}

export default RestaurantMenu