import { useState } from "react";
import MenuList from "./MenuList";

const MenuCategory = ({ data, showItems, setShowIndex }) => {
    handleClick = () => {
        setShowIndex();
    };
    return (
        <div>
            <div className="w-6/12 p-2 mx-auto my-4 bg-gray-50 shadow-lg">
                <div
                    className="flex justify-between cursor-pointer"
                    onClick={handleClick}>
                    <span className="font-bold text-lg">
                        {data.title} ({data.itemCards.length})
                    </span>
                    {showItems ? (
                        <span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="size-6">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="m4.5 15.75 7.5-7.5 7.5 7.5"
                                />
                            </svg>
                        </span>
                    ) : (
                        <span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="size-6">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="m19.5 8.25-7.5 7.5-7.5-7.5"
                                />
                            </svg>
                        </span>
                    )}
                </div>
                <div>
                    {console.log(showItems)}
                    {showItems && <MenuList data={data.itemCards} />}
                </div>
            </div>
        </div>
    );
};

export default MenuCategory;
