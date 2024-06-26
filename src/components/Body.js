import ResturantCard, { withPromotedLabel } from "./RestaurantCard";
import { useEffect, useState, useContext } from "react";
import { SWIGGY_API } from "../utils/constants";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import loggedInUser from "../utils/UserContext";

const searchBarStyle = {
    color: "green",
};
const Body = () => {
    const [resList, setResList] = useState([]);
    const [filteredResList, setfilteredResList] = useState([]);
    const [searchTxt, setSearchTxt] = useState("");
    const isOnline = useOnlineStatus();
    const RestaurantCardPromoted = withPromotedLabel(ResturantCard);

    const { name, setUserData } = useContext(loggedInUser);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(SWIGGY_API);
        const jsonData = await data.json();
        setResList(
            jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
                ?.restaurants
        );
        setfilteredResList(
            jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
                ?.restaurants
        );
    };

    if (!isOnline) {
        console.log("You are offline body.js");
        return <h1>Opps ! You are offline...</h1>;
    }

    if (resList && resList.length === 0) {
        return <Shimmer />;
    }

    return (
        <div className="flex flex-col">
            <div
                className="flex flex-row justify-evenly shadow-sm shadow-red-400 bg-slate-200"
                style={searchBarStyle}>
                <div className="px-4 py-2 ">
                    <input
                        type="text"
                        data-testid="searchInput"
                        className="border border-solid border-black m-2"
                        value={searchTxt}
                        onChange={(e) => {
                            setSearchTxt(e.target.value);
                        }}></input>

                    <button
                        className="px-4 py-2 bg-green-100 m-4 rounded-lg"
                        onClick={() => {
                            const filterData = resList.filter((item) =>
                                item.info.name
                                    .toLowerCase()
                                    .includes(searchTxt.toLowerCase())
                            );
                            setfilteredResList(filterData);
                        }}>
                        Search
                    </button>
                </div>
                <div className="px-4 py-2 flex items-center">
                    <button
                        className="px-4 py-2 bg-green-100 m-4 rounded-lg"
                        onClick={() => {
                            setfilteredResList(resList);
                            setSearchTxt("");
                        }}>
                        Clear
                    </button>

                    <button
                        className="px-4 py-2 bg-green-100 m-4 rounded-lg"
                        onClick={() => {
                            const filteredList = resList.filter(
                                (res) => res.info.avgRating > 4.3
                            );
                            setfilteredResList(filteredList);
                        }}>
                        Top Rated Restuarants
                    </button>
                </div>
                <div className=" flex items-center">
                    <label className="">User Name : </label>
                    <input
                        type="text"
                        className="border border-solid border-black p-1 rounded-lg"
                        value={name}
                        onChange={(e) => {
                            setUserData({
                                name: e.target.value,
                            });
                        }}></input>
                </div>
            </div>
            <div className="flex flex-wrap justify-evenly justify-items-center">
                {filteredResList &&
                    filteredResList.map((items) => (
                        <Link
                            to={"/restaurants/" + items.info.id}
                            key={items.info.id}>
                            {items.info.isOpen ? (
                                <RestaurantCardPromoted resData={items.info} />
                            ) : (
                                <ResturantCard resData={items.info} />
                            )}
                        </Link>
                    ))}
            </div>
        </div>
    );
};

export default Body;
