import React from "react";

function ShoppingCart(props) {
    const handleCheckout = (e) => {
        e.preventDefault();
        alert("Thank you for your purchase");
    };

    return (
        <div>
            {/* Display your cart items in a table or another suitable format */}
            <form onSubmit={handleCheckout}>
                <button type="submit">Checkout</button>
            </form>
        </div>
    );
}

export default ShoppingCart;
