import { useEffect, useState } from "react"
import Shimmer from "./components/Shimmer"
import { useParams } from "react-router-dom"
import useRestaurant from "./utils/useRestaurant"

const RestaurantMenu = () => {
    const { resId } = useParams()
    const restaurantInfo = useRestaurant(resId)

    if (!restaurantInfo) return <Shimmer />

    const { name, cuisines, costForTwoMessage } = restaurantInfo?.cards[0]?.card?.card?.info
    const { itemCards } = restaurantInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card

    return (
        <div className="menu">
            <h1>{name}</h1>
            <p>{cuisines.join(", ")} - {costForTwoMessage}</p>
            <ul>
                {itemCards.map((item) =>
                    <li key={item.card.info.id}>{item.card.info.name} - {item.card.info.price / 100}
                    </li>)}
            </ul>
        </div>
    )
}

export default RestaurantMenu