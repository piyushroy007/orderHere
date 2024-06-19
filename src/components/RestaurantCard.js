import { LOGO_URL } from "../utils/constants";

const ResturantCard = (props) => {
  const {resData} = props;
  const {name,cloudinaryImageId,avgRating,cuisines,costForTwo,sla} = resData;
    return (
        <div className="m-4 p-4 w-64 rounded-lg h-100 bg-gray-200">
            <img className="w-56" 
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
};

export const withPromotedLabel = (ResturantCard) => {
  return (props) =>{
    return (
      <div>
        <label className="absolute bg-green-600 mx-4 my-1 px-1 text-white rounded-md">Online</label>
        <ResturantCard {...props}/>
      </div>
    )
  }
};


export default ResturantCard;