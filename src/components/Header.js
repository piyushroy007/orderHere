import { Link } from "react-router-dom";
import { HEADER_LOGO_URL } from "../utils/constants";
import { useContext, useState } from "react";
import loggedInUser from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
    const userDetails = useContext(loggedInUser);
    const [textLogin, setTextLogin] = useState("Login");

    function handleLogin() {
        if (textLogin === "Login") {
            // redirect to login page
            setTextLogin("Logout");
        } else {
            // redirect to home page
            setTextLogin("Login");
        }
    }

    // subscribe to the store using a selector
    const cartItems = useSelector((store) => store.cart.items);
    return (
        <div className="flex justify-between shadow-sm shadow-red-300">
            <div className="logo-container">
                <img className="w-24" src={HEADER_LOGO_URL}></img>
            </div>
            <div className="flex items-center">
                <ul className="flex p-4 m-4">
                    <li className="px-4">
                        <Link to="/"> Home </Link>
                    </li>
                    <li className="px-4">
                        <Link to="/about"> About </Link>
                    </li>
                    <li className="px-4">
                        <Link to="/contact"> Contact Us </Link>
                    </li>
                    <li className="px-4 font-bold text-xl">
                        <div className="flex justify-between items-center">
                            <Link to="/cart">
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
                                        d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                                    />
                                </svg>
                            </Link>
                            <span className="pb-1">({cartItems.length})</span>
                        </div>
                    </li>
                    {/* <li className="px-4">{userDetails.name}</li> */}
                    <li className="px-4">
                        <button
                            className="rounded-lg bg-slate-600 text-white w-20 h-7"
                            onClick={handleLogin}>
                            {textLogin}
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Header;
