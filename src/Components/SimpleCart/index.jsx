import React from "react";
import { useSelector, useDispatch } from "react-redux";

const SimpleCart = () => {
    const cart = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    const removeFromCart = (product) => {
        dispatch({ type: "REMOVE_FROM_CART", payload: product });
    };

    return (
        <div className="simple-cart">
            <h3>Shopping Cart</h3>
            <ul>
                {cart.map((item, index) => (
                    <li key={index}>
                        {item.name}
                        <button onClick={() => removeFromCart(item)}>
                            Remove
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SimpleCart;
