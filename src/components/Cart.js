import { clearCart } from "../redux/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import MenuList from "./MenuList";

const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items);

    const dispatch = useDispatch();

    const handleClearCart = () => {
        dispatch(clearCart());
    };

    console.log("Cart items: " + cartItems);

    return (
        <div className="m-auto w-6/12 text-center">
            <div className="m-3 p-2 font-bold text-xl bg-green-300 shadow-md shadow-orange-400 flex justify-between ">
                <span>Cart</span>
                <button
                    className="bg-black text-white rounded-md p-1"
                    onClick={handleClearCart}>
                    Clear Cart
                </button>
            </div>
            {cartItems.length === 0 && (
                <h1>Cart is empty.Please add some items</h1>
            )}
            <div className="bg-slate-300">
                <MenuList data={cartItems} />
            </div>
        </div>
    );
};

export default Cart;
