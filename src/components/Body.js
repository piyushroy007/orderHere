import ResturantCard, { withPromotedLabel } from "./RestaurantCard"
import { useEffect, useState } from "react"
import { SWIGGY_API } from "../utils/constants"
import Shimmer from "./Shimmer"
import { Link } from "react-router-dom"
import useOnlineStatus from "../utils/useOnlineStatus"

const searchBarStyle = {
    border: "1px solid black"
}
const Body = () => {
  const [resList, setResList] = useState([]);
  const [filteredResList, setfilteredResList] = useState([]);
  const [searchTxt, setSearchTxt] = useState("");
  const isOnline = useOnlineStatus();
  const RestaurantCardPromoted = withPromotedLabel(ResturantCard);

  console.log("body reslist: ",resList)

  
  useEffect( ()=> {
    fetchData();
  }, []);
 
  const fetchData =  async () => {
    const data = await fetch(SWIGGY_API);
    const jsonData = await data.json();
    setResList(jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    setfilteredResList(jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    console.log(jsonData.data.cards[1].card.card.gridElements.infoWithStyle.restaurants)
  }

  if(!isOnline) {
   console.log("You are offline body.js");
   return(
     <h1>Opps ! You are offline...</h1>
   )
 }

  if (resList.length === 0) {
    return (
      <Shimmer/>
    )
  } 

  return (
      <div className="body">
          <div className="flex" style={searchBarStyle  }>
            <div className="px-4 py-2 ">
              <input 
                type="text"
                className="border border-solid border-black m-2"
                value={searchTxt}
                onChange={(e)=>{
                  console.log(e.target.value);
                  setSearchTxt(e.target.value);
                }}>
              </input>

              <button
                className="px-4 py-2 bg-green-100 m-4 rounded-lg"
                onClick={()=>{
                  console.log(searchTxt);
                  console.log(resList[1].info.name.toLowerCase().includes(searchTxt.toLowerCase()));
                  const filterData = resList.filter( 
                    (item) => item.info.name.toLowerCase().includes(searchTxt.toLowerCase()))
                  console.log("filterData",filterData)
                  setfilteredResList(filterData);
                }}
              >
                Search
              </button>
            </div>
            <div className="px-4 py-2 flex items-center">  
              <button 
                className="px-4 py-2 bg-green-100 m-4 rounded-lg"
                onClick={ () =>{
                  setfilteredResList(resList);
                  setSearchTxt("");
                }}
              >
                Clear
              </button>

              <button 
                className="px-4 py-2 bg-green-100 m-4 rounded-lg"
                onClick={ () =>{
                  const filteredList = resList.filter(
                    (res)=> res.info.avgRating > 4.3
                  );
                  setfilteredResList(filteredList);
              }}>
                Top Rated Restuarants
              </button>
            </div>

            
          </div>
          <div className="flex flex-wrap">
            {
              filteredResList.map((items)=>(
                <Link 
                  to={"/restaurants/" + items.info.id} 
                  key={items.info.id}>
                  {items.info.isOpen ? <RestaurantCardPromoted resData={items.info}/> : <ResturantCard resData={items.info} />}
                </Link>
              ))
            }
          </div>
      </div>
  )
}

export default Body