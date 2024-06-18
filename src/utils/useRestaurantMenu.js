import { useState,useEffect } from "react";
import { SWIGGY_MENU_API } from "./constants";

const UseRestaurantMenu = (resId) => {
    const [resInfo, setResInfo] = useState(null);

    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
        try {
            const response = await fetch(SWIGGY_MENU_API + resId);
            const json = await response.json();
            setResInfo(json?.data?.cards);
        } catch (error) {
            console.error("Error fetching menu: ", error);
        }
    }
    return resInfo;
}

export default UseRestaurantMenu;