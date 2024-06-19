import MenuCategory from "./MenuCategory";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import UseRestaurantMenu from "../utils/useRestaurantMenu";
import { useState } from "react";

const RestaurantMenu = () => {
    const { resId } = useParams();
    const resInfo = UseRestaurantMenu(resId);

    const [showIndex, setShowIndex] = useState(null);

    const updateActiveIndex = (newIndex) => {
        // updated - opening and closing same accordion functionality.
        console.log("updateActiveIndex", newIndex);
        if (newIndex === showIndex) {
            setShowIndex(null);
        } else {
            setShowIndex(newIndex);
        }
    };
    if (resInfo === null) {
        return <Shimmer />;
    }

    const { name, cuisines, costForTwoMessage } = resInfo[2]?.card?.card?.info;
    const { itemCards } =
        resInfo[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2].card.card;
    const categories =
        resInfo[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
            (item) =>
                item?.card?.card?.["@type"] ===
                "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        );

    return (
        <div className="text-center m-auto">
            <h1 className="font-bold my-4 text-2xl">{name}</h1>
            <p className="font-bold text-lg">{cuisines.join(",")}</p>
            <h4>{costForTwoMessage}</h4>
            {categories.map((item, index) => (
                // controlled component
                <MenuCategory
                    key={item?.card?.card.title}
                    data={item?.card?.card}
                    showItems={index === showIndex}
                    setShowIndex={() => updateActiveIndex(index)}
                />
            ))}
        </div>
    );
};

export default RestaurantMenu;
