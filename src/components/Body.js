import ResturantCard from "./RestaurantCard"
import { useEffect, useState } from "react"
import { SWIGGY_API } from "../utils/constants"
import Shimmer from "./Shimmer"


const searchBarStyle = {
    border: "1px solid black"
}
const Body = () => {
  const [resList, setResList] = useState([]);
  const [filteredResList, setfilteredResList] = useState([]);
  const [searchTxt, setSearchTxt] = useState("");
  console.log("body reslist: ",resList)
  useEffect( ()=> {
    fetchData();
  }, []);

  const fetchData =  async () => {
    const data = await fetch(SWIGGY_API);
    const jsonData = await data.json();
    setResList(jsonData.data.cards[1].card.card.gridElements.infoWithStyle.restaurants)
    setfilteredResList(jsonData.data.cards[1].card.card.gridElements.infoWithStyle.restaurants)
    console.log(jsonData.data.cards[1].card.card.gridElements.infoWithStyle.restaurants)
  }

  if (resList.length === 0) {
    return (
      <Shimmer/>
    )
  } 

  return (
      <div className="body">
          <div className="search" style={searchBarStyle  }>
            
            <input 
              type="text"
              className="search-box"
              value={searchTxt}
              onChange={(e)=>{
                console.log(e.target.value);
                setSearchTxt(e.target.value);
              }}>
            </input>

            <button
              className="search-btn"
              onClick={()=>{
                console.log(searchTxt);
                console.log(resList[1].info.name.toLowerCase().includes(searchTxt.toLowerCase()));
                const filterData = resList.filter( 
                  (item) => item.info.name.toLowerCase().includes(searchTxt.toLowerCase()))
                console.log("filterData",filterData)
                setfilteredResList(filterData);
              }}
            >Search</button>

            <button 
              className="clear-btn"
              onClick={ () =>{
                setfilteredResList(resList);
              }}
            >
              Clear
            </button>

            <button 
              className="search-btn"
              onClick={ () =>{
                const filteredList = resList.filter(
                  (res)=> res.info.avgRating > 4.3
                );
                setfilteredResList(filteredList);
            }}>
              Top Rated Restuarants
            </button>
            
          </div>
          <div className="resturant-container">
            {
              filteredResList.map((items)=>(
                <ResturantCard key={items.info.id} resData={items.info} />
              ))
            }
          </div>
      </div>
  )
}

export default Body