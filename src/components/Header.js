import { Link } from "react-router-dom";
import { HEADER_LOGO_URL } from "../utils/constants";

const Header = () => {
    return (
        <div className="flex justify-between border-box border-b-2">
            <div className="logo-container">
                <img className="w-28" src={HEADER_LOGO_URL}></img>
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
                    <li className="px-4">Cart</li>
                </ul>
            </div>
        </div>
    );
};

export default Header;
