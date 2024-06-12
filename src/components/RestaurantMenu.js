import { useEffect, useState } from "react";
import { SWIGGY_MENU_API } from "../utils/constants";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  },[]);

  const fetchMenu = async () => {
    const response = await fetch(SWIGGY_MENU_API + resId);
    const data = await response.json();
    setResInfo(data?.data?.cards);
  }

  
  if(resInfo === null) {
    return (
      <Shimmer/>
      )
    }
    
  const {name,cuisines, costForTwoMessage} = resInfo[2]?.card?.card?.info;

  const {itemCards} = resInfo[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2].card.card;

  return (
    <div className='menu'>
        <h1>{name}</h1>
        <h2>{cuisines.join(",")}</h2>
        <h4>{costForTwoMessage}</h4>
        <ul>
          {itemCards.map( (item) => (
            <li key={item.card.info.id}>
              {item.card.info.name} --------- {" Rs:"} {item.card.info.defaultPrice / 100 || item.card.info.price / 100}
            </li>
          ))}
        </ul>
    </div>
  )
}

export default RestaurantMenu;