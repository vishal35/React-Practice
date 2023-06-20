import { useEffect, useState } from "react"
import { MENU_API } from "./constant"

const useRestaurant = (resId) => {

    const [restaurantInfo, setRestaurantInfo] = useState(null)

    useEffect(() => {
        fetchMenu()
    }, [resId])

    const fetchMenu = async () => {
        const data = await fetch(MENU_API + resId)
        const json = await data.json();

        setRestaurantInfo(json.data);
    }

    return restaurantInfo

}

export default useRestaurant