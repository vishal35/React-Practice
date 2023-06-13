import React from "react"
import { CDN_URL } from "../utils/constant"

const RestaurantCard = ({ restData }) => {

    const { name, cuisines, avgRating, costForTwo, deliveryTime, cloudinaryImageId } = restData.data

    return (
        <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
            <img alt="res-logo" className="res-logo" src={CDN_URL + cloudinaryImageId} />
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating} stars</h4>
            <h4>₹{costForTwo} FOR TWO</h4>
            <h4>{deliveryTime}</h4>
        </div>
    )
}

export default RestaurantCard