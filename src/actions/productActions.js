export const fetchProducts = () => {
    return async (dispatch) => {
        try {
            const response = await fetch("/api/products");
            const data = await response.json();
            dispatch({ type: "SET_PRODUCTS", payload: data });
        } catch (error) {
            console.error("Error fetching products:", error);
        }
    };
};

export const addToCart = (product) => {
    return async (dispatch) => {
        try {
            // Make an API request to decrement the inventory count on the server
            const response = await fetch(
                `/api/products/${product.id}/addToCart`,
                {
                    method: "POST", // Use POST to update the server
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ quantity: 1 }), // You can pass the quantity you want to add
                }
            );

            if (response.ok) {
                dispatch({ type: "ADD_TO_CART", payload: product });
            } else {
                console.error("Error adding to cart:", response.statusText);
            }
        } catch (error) {
            console.error("Error adding to cart:", error);
        }
    };
};

export const removeFromCart = (product) => {
    return async (dispatch) => {
        try {
            // Make an API request to increment the inventory count on the server
            const response = await fetch(
                `/api/products/${product.id}/removeFromCart`,
                {
                    method: "POST", // Use POST to update the server
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ quantity: 1 }), // You can pass the quantity you want to remove
                }
            );

            if (response.ok) {
                dispatch({ type: "REMOVE_FROM_CART", payload: product });
            } else {
                console.error("Error removing from cart:", response.statusText);
            }
        } catch (error) {
            console.error("Error removing from cart:", error);
        }
    };
};
