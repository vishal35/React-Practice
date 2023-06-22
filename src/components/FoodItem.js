import React from "react"
import { CDN_URL } from "../utils/constant"

const FoodItem = ({ name, description, cloudinaryImageId, price }) => {

    return (
        <div className="w-48 p-2 m-2 shadow-lg bg-pink-50">
            <img alt="res-logo" className="res-logo" src={CDN_URL + cloudinaryImageId} />
            <h3 className="font-bold text-xl">{name}</h3>
            <h4>₹{price / 100} FOR TWO</h4>
        </div>
    )
}

export default FoodItem