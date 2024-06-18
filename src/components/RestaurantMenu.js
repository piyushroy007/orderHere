import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import UseRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = UseRestaurantMenu(resId)
  
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