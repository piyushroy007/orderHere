import { LOGO_URL } from "../utils/constants";

const MenuList = (items) => {
    const menuList = items.data;
    return (
        <div className="">
            {menuList.map((item) => (
                <div
                    key={item?.card?.info?.name}
                    className="p-2 m-2 border-gray-200 border-b-2 flex ">
                    <div className="text-left w-9/12">
                        <span className="font-bold">
                            {item?.card?.info?.name} -{" "}
                        </span>
                        <span className="font-bold">
                            {" "}
                            ₹{" "}
                            {item?.card?.info?.defaultPrice
                                ? item?.card?.info?.defaultPrice / 100
                                : item?.card?.info?.price / 100}
                        </span>
                        <p className="text-sm">
                            {item?.card?.info?.description}
                        </p>
                    </div>
                    <div className="w-3/12 p-3 flex justify-center items-end">
                        <div className="absolute">
                            <button className="p-1 bg-white shadow-lg text-green-400 rounded-lg w-20">
                                {" "}
                                Add +
                            </button>
                        </div>
                        <img
                            className="w-full"
                            src={LOGO_URL + item?.card?.info?.imageId}
                        />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default MenuList;
