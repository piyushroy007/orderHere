import { LOGO_URL } from "../utils/constants";

const ResturantCard = (props) => {
  const {resData} = props;
  const {name,cloudinaryImageId,avgRating,cuisines,costForTwo,sla} = resData;
    return (
        <div className="resturant-card">
            <img className="res-img" 
              alt={name} 
              src={LOGO_URL+cloudinaryImageId}>
            </img>
            <p>{name}</p>
            <p>{costForTwo}</p>
            <p className="cuisines">{cuisines.join(', ')}</p>
            <p>ETA : {sla.deliveryTime} mins</p>
            <p>{"Ratings :"+avgRating}</p>
        </div>
    )
}


export default ResturantCard;